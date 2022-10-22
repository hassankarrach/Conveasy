FROM node:17 AS Production

ENV CLINET_URL = ''

WORKDIR /usr/src/Server

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["sh", "-c", "yarn start"]