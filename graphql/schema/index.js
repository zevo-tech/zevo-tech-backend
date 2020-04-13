const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    

type Users {
    _id : ID!
    name : String!
    email : String!
    mobile : String!
    address: String!
    password:String
}
input userInput 
{
     
        name : String!
        email : String!
        mobile : String!
        address : String!
        password:String!
}
    type RootQuery{
        users : [Users!]!
    }

    type RootMutation{
        createUser(userdetails : userInput) : Users
    }

    schema {
            query: RootQuery
            mutation: RootMutation
    } 

    

`);