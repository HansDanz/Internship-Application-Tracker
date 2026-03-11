from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify your frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Application(BaseModel):
    id: int
    company: str
    status: str
    link: str

applications = [
    Application(id= 1, company= "GovTech", status= "Interview", link= "#"),
    Application(id= 2, company= "Grab", status= "Applied", link= "https://www.grab.careers/en/")

]

@app.get("/")
def root():
    return {"Hello": "World"}

@app.get("/applications")
def get_applications():
    return applications

@app.post("/applications")
def add_application(app: Application):
    applications.append(app)
    return applications

@app.put("/applications/{id}")
def edit_application(id: int, app: Application):
    for index, existing in enumerate(applications):
        if existing.id == id:
            applications[index] = app
            return applications

@app.delete("/applications/{id}")
def delete_application(id: int):
    for index, existing in enumerate(applications):
        if existing.id == id:
            del applications[index]
            return applications
