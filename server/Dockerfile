# Use the official Node.js 21 image as the base image
FROM node:21

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the app runs on
EXPOSE 8000

# Define the command to run the app
CMD ["npm", "start"]