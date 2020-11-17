# Base image
FROM node
# Make folder to put our files in
RUN mkdir -p /usr/src/full-stack
RUN mkdir -p /usr/src/full-stack/backend 
# Set working directory so that all subsequent command runs in this folder
WORKDIR /usr/src/full-stack/backend 
# Copy package json and install dependencies
COPY package*.json ./
RUN npm install 
# Copy our app
COPY . .
# Expose port to access server
EXPOSE 8080
# Command to run our app
CMD [ "npm", "start"]