FROM node:18.17.1-alpine
WORKDIR /app

COPY . .
ENV API_SERVER_FILE=http://172.21.0.2:3001
EXPOSE 4321

RUN npm i
RUN npm run build

CMD node ./dist/server/entry.mjs