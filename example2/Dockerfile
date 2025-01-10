FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install
RUN ls -l node_modules

COPY . .
COPY package.json .


EXPOSE 3000

CMD ["npm", "start"]
