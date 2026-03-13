#setting the table columns for database
from sqlalchemy import Column, Integer, String
from database import Base 

class Application(Base):
     __tablename__ = "applications"

     id = Column(Integer, primary_key=True,  index=True)
     company = Column(String)
     status = Column(Integer)
     link =  Column(String)
