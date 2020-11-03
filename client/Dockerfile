FROM node:14.13.1-alpine3.12

RUN mkdir -p app/client
WORKDIR /app/client

COPY package.json /app/client
RUN yarn install

COPY . /app/client

CMD [ "yarn", "start", "--host", "0.0.0.0" ]
EXPOSE 4000