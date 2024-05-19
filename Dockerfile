# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your project into the working directory
COPY . .

# Build the application
RUN npm run build

# Install serve to run the application (you can optimize by using a smaller base image for production)
RUN npm install -g serve

# Command to serve the application
CMD ["serve", "-s", "dist", "-l", "5173", "--single"]

# Expose the port the app runs on
EXPOSE 5173