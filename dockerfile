FROM node:21-alpine3.19

WORKDIR /usersrc//app

COPY package*.json ./

RUN npm install

COPY . .