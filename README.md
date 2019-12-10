# sample-pipeline

This project showcases a pipeline for a simple web app.

Project stack:
- Node.js backend with Express
- React frontend
- Circle CI for continuous integration
- AWS as the cloud platform

# Development config

1. Setup config
   - copy backend config file without example-addon `cp backend/config/default.example.json default.json`
     - change values to match your setup
   - copy api .env file `cp api/exampleEnv .env`
     - change values as needed
2. Run `docker-compose up`
3. Login to `http://localhost:8080/console`, create `user` and give it all permissions
4. Run `npm install`
5. You now have a Node.js auth server capable of
   1. Registering users (requires username, password, email)
   2. Logging in users (passwords hashed with bcrypt, 10 rounds of salt) - successful login returns JWT for quering GraphQL
6. You also now have a development version of Hasura serving a GraphQL API with PostgreSql as database