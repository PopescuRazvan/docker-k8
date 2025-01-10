FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

#anonymous volume is save by docker but dont know it
#VOLUME [ "/app/feedback" ]


CMD ["node", "server.js"]   

