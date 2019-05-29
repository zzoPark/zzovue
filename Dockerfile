FROM node:latest

WORKDIR /zzovue
COPY . .

RUN npm install
RUN npm run build

CMD ["node", "server"]
