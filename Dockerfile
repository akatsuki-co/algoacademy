FROM node:12.18-alpine3.9 as builder

RUN mkdir /project-build
WORKDIR /project-build

COPY client/package.json client/package.json

RUN npm install --silent

COPY . .

RUN npm run-script build

FROM node:12.18-alpine3.9

RUN mkdir /app
WORKDIR /app

RUN apk update && \
    apk upgrade

COPY package.json package.json
RUN npm install --silent 

COPY . .

LABEL maintainer="Ryuichi Miyazaki <rmiyazaki11@ucsbalum.com>"

CMD npm start 
