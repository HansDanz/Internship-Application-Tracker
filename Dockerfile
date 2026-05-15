FROM node:22

RUN apt-get update && apt-get install -y curl \
 && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
 && apt-get install -y nodejs \
 && apt-get clean
 
#Goes to the main directory
WORKDIR /Internship-Application-Tracker

#Copy package.json and package-lock.
COPY package*.json ./

#Install parent dependencies
RUN npm install

#Copy the rest of the web app
COPY . . 



