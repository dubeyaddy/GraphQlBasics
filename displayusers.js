const express = require('express');
 
const {graphqlHTTP} = require('express-graphql');
 
const {buildSchema} = require('graphql');

//Build the schema
 const schema = buildSchema(`
    #define the type
    type User{
        id: Int,
        name:String,
        age: Int
    }
 
    #define the query
    type Query{
        #return all products
 
        getAllUsers:[User]
 
        #return Products by Name
        #..list goes on to fetch the products
    }
`)

//3. Product sample data
const userData=[
    {id:1, name:'Lalu',age:56},
    {id:2, name:'Bhalu',age:25},
    {id:3, name:'Golu',age:60},
    {id:4, name:'Molu',age:25},
    {id:5, name:'Kalu',age:9},
    {id:6, name:'Salu',age:4}  
]

//4. Resolver functions
const root = {
    getAllUsers:()=>{
        return userData[name];
    }
}

//5. Execute the GQL server using the express framework and GQL client
 
    //express server
    const app = express();
 
 
    //configure the graphql with the express server
    //http://localhost:1234/graphql
    app.use('/graphql', graphqlHTTP({
        //3 named parameters  - schema, rootvlaue, graphql client
        schema: schema, //gql schema
        rootValue: root,  // resolver fucntion
        graphiql: true // to enable the gql client interface
    }));
 
    //run the express server
    app.listen(4321, ()=>{
        console.log("Server is running at port no 4321");
    });

