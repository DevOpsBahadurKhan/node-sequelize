FROM node:16.20.2

MAINTAINER info.bahadur6350@gmail.com

COPY . *.json

RUN npm install

CMD ['npm','start']

