FROM node:latest

RUN mkdir /backend
WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY . . 