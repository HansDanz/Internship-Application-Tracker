#fastapi server in Python, connects to applications.jsx which in turn connects to ApplicationsList.jsx

from fastapi import FastAPI, HTTPException, Depends #Depends is only needed for SQLite integration 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import models 
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from typing import List

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db 
    finally:
        db.close()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify your frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ApplicationCreate(BaseModel):
    # id: int   
    company: str
    status: int
    link: str

class ApplicationResponse(BaseModel):
    id: int   
    company: str
    status: int
    link: str

'''
applications = [
    Application(id= 1, company= "GovTech", status= "Interview", link= "#"),
    Application(id= 2, company= "Grab", status= "Applied", link= "https://www.grab.careers/en/")
]
'''

@app.get("/")
def root():
    return {"Hello": "World"}

@app.get("/applications", response_model=list[ApplicationResponse])
def get_applications(db: Session = Depends(get_db)):
    #return applications fastapi only version
    return db.query(models.Application).all()

@app.post("/applications")
def add_application(app: ApplicationCreate, db: Session = Depends(get_db)):
    #applications.append(app) , fastapi only version 

    application_model = models.Application()
    application_model.company =  app.company
    application_model.status =  app.status 
    application_model.link =  app.link

    db.add(application_model)
    db.commit()
    db.refresh(application_model)
    return db.query(models.Application).all()

''' fastapi edition 
@app.put("/applications/{id}")
def edit_application(id: int, app: Application):
    for index, existing in enumerate(applications):
        if existing.id == id:
            applications[index] = app
            return applications
'''

@app.put("/applications/{id}")
def edit_application(id: int, app: ApplicationCreate, db: Session = Depends(get_db)):
    application_model = db.query(models.Application).filter(models.Application.id == id).first() 
    print("application model okay!")
    if application_model == None:
        raise HTTPException(
            status_code=404,
            detail=f"ID {id}: Does not exist "
        )

    application_model.company =  app.company
    print("company okay!")
    application_model.status =  app.status
    print("status okay!")
    application_model.link =  app.link
    print("link okay!")

    db.add(application_model)
    db.commit()
    return db.query(models.Application).all()

'''    
@app.delete("/applications/{id}")
def delete_application(id: int):
    for index, existing in enumerate(applications):
        if existing.id == id:
            del applications[index]
            return applications
'''
@app.delete("/applications/{id}")
def delete_application(id: int, db: Session = Depends(get_db) ):
    application_model = db.query(models.Application).filter(models.Application.id ==  id).first()  
    
    if application_model == None:
         raise HTTPException(
             status_code=404,
             detail=f"ID {id}: Does not exist "
         )
    
    db.query(models.Application).filter(models.Application.id ==  id).delete ()

    db.commit()

    return get_applications(db)