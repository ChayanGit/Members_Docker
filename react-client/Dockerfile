
FROM node:latest
WORKDIR /app
COPY package*.json ./
COPY build ./
RUN npm install
RUN npm install -g serve
RUN serve -l 8081 -s build