FROM node:14 AS Production

ENV SERVER_URL = ''

WORKDIR /Client

COPY package.json .

RUN yarn install

COPY . .

CMD ["sh", "-c", "yarn run dev"]