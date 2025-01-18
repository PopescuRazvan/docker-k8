#connect to ssh amazon 
ssh -i ~/DockerAws.pem ec2-user@ec2-54-210-182-199.compute-1.amazonaws.com



#local
docker build -t node-dep-example1 .
docker tag node-dep-example1 razvan176/node-example-1
docker push razvan176/node-example-1

#server side
docker pull razvan176/node-example-1
docker run -d --rm -p 80:80  razvan176/node-example-1 