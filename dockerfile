# Use Node.js LTS
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (better caching for dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source code
COPY . .

# Expose the app port
EXPOSE 9090

# Start app
CMD ["node", "entry.js"]
