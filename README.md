# Broiler-plate

Broiler-plate is a simple register/sign-in webapp that allows anyone to quickly start developing the rest of the app.

Broiler-plate contains following components
* Hasura GraphQL API
* PostgreSQL database
* Node.js backend auth service
* Create-react-app frontend

# Prerequisites

Broiler-plate was developed using the following versions, most probably works on older versions
* Node 12.10.0
* React 16.12.0
* Docker - cli logged in
* [Hasura CLI](https://docs.hasura.io/1.0/graphql/manual/hasura-cli/install-hasura-cli.html)

# Installing Broiler-plate

To install and configure Broiler-plate for *development*, run 
`./wizard.sh`

Alternatively, refer to [instructions](INSTALL.md)

# Deployment

This application can be deployed to [AWS](AWS.md).

# Tests

```
cd broiler-plate/backend
npm test

cd broiler-plate/testcafe
testcafe chrome register.js
```

---

Named after [Kukko Pärssinen](https://www.iltalehti.fi/uutiset/a/2011100514516893)