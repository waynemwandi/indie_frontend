# Use Node.js official image
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the frontend code
COPY . /app

# Expose the development server port
EXPOSE 5173

# Start the frontend development server
CMD ["npm", "run", "dev"]
