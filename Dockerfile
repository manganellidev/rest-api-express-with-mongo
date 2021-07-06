FROM node:12-alpine

RUN mkdir -p /tag-books
WORKDIR /tag-books
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080

CMD node ./src/app.js