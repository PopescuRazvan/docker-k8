#build an image # . stands for same path with docker file
docker build . 

#run image -p : port out: port in  to name of the image
docker run -p 3000:80 75e1478b1134945564709562edb05d12fb86f37d07218c76e997ab8886d34b2d

#list of process on docker 
docker ps 

#stop a process 
docker stop name_process

#attach and deattch  #-d stand for deatch mode
docker run -p 3000:80 -d aba
docker attach aba

#logs container
docker logs aba

#docker insert mode
docker start -a -i aba
docker run -it aba

#docker coppy example 
docker cp simple_example/. name_container:/simple_example

#docker allias name
docker build -t image_name .
docker run -p 3000:80 --name container_name image_name

#push and pull on docker repo
docker push razvan176/test-python-docker:tagname
docker pull razvan176/test-python-docker

#all volumes
docker volume ls

#volume docker name // -v feedback:/app/feedback this a docker volumes name //and keeps the volumes if the container is stop
docker run -d -p 3000:80 --rm --name feedback-app  -v feedback:/app/feedback feedback-node:volumes

#mount docker
docker run -d -p 3000:80 --rm --name feedback-app  -v feedback:/app/feedback -v "D:/Learn Python/Docker and K8/example4/:/app"  feedback-node

#mount docker shorcut -v "${PWD}:/app" 
docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback -v "${PWD}:/app" feedback-node
docker run -it -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback -v "${PWD}:/app" feedback-node sh

#anonymous volume 
docker run -v /app/data

#named volume 
docker run -v data:/app/data 

#bind mount 
docker run -v /path/to/code:/app/code

#crate volum 
docker volume create feedback-files

#env 
docker run -d -p 3000:80 --rm --name feedback-app  feedback-node:env

#env as a file 
docker run -d --rm -p 3000:8000 --env-file ./.env --name feedback-app feedback-node:env

#example of args
docker build -t feedback:node:dev --build-arg DEFAULT_PORT=8000

#example of using connection with another app as mongo 
  //this is how u connect to docker from container to container
  // 'mongodb://172.17.0.2:27017/swfavorites',

  //this is how u connect to docker from local to container
  'mongodb://host.docker.internal:27017/swfavorites',

  //this only works on local
  //'mongodb://localhost:27017/swfavorites',

#create a network and containter in the same network 
docker network create test-net
docker run -d --name mongodb --network test-net mongo
docker run --name test1 -d --network test-net --rm -p 3000:3000 example5 

  //this works in containter with the name of the container because are having the same network
  //'mongodb://mongodb:27017/swfavorites',


#docker compose 
docker-compose up -d

#docker compose down delete all container and images not the volumes u need -v for that
docker-compose down -v

#force to rebuild image
docker-compose build

#execute a comand insde of container 
docker exec name_container npm init

#docker-compose with remove /init is the continue comand for entrypoint
docker-compose run --rm name_container init
