This is a GraphQl api example using:
- [Nodejs 14 (vanilla with modules)](https://nodejs.org/dist/latest-v14.x/docs/api/)
- [ApolloServer](https://www.apollographql.com/docs/apollo-server/)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Knex (Query builder)](http://knexjs.org/)

# Install

Build image  
`docker build -t nodejs-knex docker-images/nodejs-knex`


Create Database  
`docker-compose up -d db && sleep 20s && docker exec -it pg.local.plathanus.com.br /bin/sh -c "psql -U postgres -c 'CREATE DATABASE plathanus'"`

# Run

`docker-compose up` 
