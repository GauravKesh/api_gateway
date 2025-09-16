FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./


# Install dependencies
RUN npm install --production


RUN npm install pm2 -g


# Copy app source
COPY . .

# Expose app port
EXPOSE 9090

# Set PM2 keys 
ENV PM2_PUBLIC_KEY=e64lqfkc7sesm1i
ENV PM2_SECRET_KEY=v9hrgx9ftm7vqs6

COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

