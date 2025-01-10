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