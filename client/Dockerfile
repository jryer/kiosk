FROM node:14.13.1-alpine3.12

RUN mkdir -p app/client
WORKDIR /app/client

COPY package.json /app/client
RUN yarn install

COPY . /app/client

CMD [ "yarn", "start" ]
EXPOSE 4000