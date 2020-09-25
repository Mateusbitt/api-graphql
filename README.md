# Install

Build image  
`docker build -t nodejs-knex docker-images/nodejs-knex`


Create Database  
`docker-compose up -d db && sleep 20s && docker exec -it pg.local.plathanus.com.br /bin/sh -c "psql -U postgres -c 'CREATE DATABASE plathanus'"`
