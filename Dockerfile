FROM node:latest

RUN npm install -g http-server

WORKDIR /zzovue
COPY . .
RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ["/zzovue/docker-entrypoint.sh"]

CMD ["http-server", "dist"]
