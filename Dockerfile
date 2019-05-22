FROM node:latest

RUN npm install -g http-server

WORKDIR /zzovue
COPY . .

RUN npm install
RUN npm run build

CMD ["http-server", "dist"]
