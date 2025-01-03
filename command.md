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
