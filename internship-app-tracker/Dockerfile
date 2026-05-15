FROM node:22
 
#Goes to the main directory
WORKDIR /Internship-Application-Tracker/internship-app-tracker/

#Copy package.json and package-lock.
COPY package*.json .

#Goes to the frontend
WORKDIR /Internship-Application-Tracker/internship-app-tracker/frontend/

#Install frontend dependencies
RUN npm install

#Copy the rest of the web app
COPY . .

#Run the app 
CMD ["npm", "start"]

