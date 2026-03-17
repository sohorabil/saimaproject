# Use official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json first (layer caching)
COPY package.json .

# Install dependencies (none, but good practice)
RUN npm install

# Copy app source code
COPY app.js .

# Expose the port your app runs on
EXPOSE 3003

# Start the application
CMD ["npm", "start"]