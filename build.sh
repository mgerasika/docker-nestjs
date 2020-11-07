docker build -t docker-stg2 .
docker stop nestjs-docker2
docker rm nestjs-docker2
docker run --env PORT=5001 -d -p 3001:5001 --name nestjs-docker2 docker-stg2
