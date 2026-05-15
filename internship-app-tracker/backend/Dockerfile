FROM python:3.11

RUN apt-get update && apt-get install -y curl \
 && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
 && apt-get install -y nodejs \
 && apt-get clean
 
#Goes to the main directory
WORKDIR /Internship-Application-Tracker/internship-app-tracker/backend/

#Copy package.json and package-lock.
COPY ./requirements.txt .

#Install parent dependencies
RUN pip install -r requirements.txt

#Copy the rest of the web app
COPY . . 

#Run the app 
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0"]
