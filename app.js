/* 
 * Importing express and graphql packagaes
 * Importing other dependecies 
 * */

const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose')

const app = new  express();

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

app.use(bodyParser.json());

app.use('/graphql',graphqlHttp({
    
    
    schema : graphQlSchema ,
    rootValue : graphQlResolvers,
    graphiql:true
})

);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}collegebot-3x0rm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
.then( () => {
    console.log("Test Run  Sucess")
    app.listen(3000);
})
.catch(err => {
    console.log(err)
});
