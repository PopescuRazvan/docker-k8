FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT = 80

#environment variable for port
ENV PORT $DEFAULT_PORT  

EXPOSE $PORT

#anonymous volume is save by docker but dont know it
#VOLUME [ "/app/feedback" ]


CMD ["node", "server.js"]   

