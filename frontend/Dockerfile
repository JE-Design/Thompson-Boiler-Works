FROM node:latest

RUN mkdir /frontend
WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . . 

RUN npm run build