FROM node:16-alpine

WORKDIR /usr/app/src

COPY ./package.json .

COPY ./yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 80

CMD ["node", "./build/index.js"]