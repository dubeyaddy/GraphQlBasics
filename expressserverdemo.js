//1. Import the packages
//2. Build the schema
//3. Prepare the data
//4. Resolver functions
//5. Execute the GQL server using Express and the GQL client (Graphiql)
 
 
//Import the packages - express , express-graphql , graphql
const express = require('express');
 
const {graphqlHTTP} = require('express-graphql');
 
const {buildSchema} = require('graphql');
 
 
//Build the schema
 const schema = buildSchema(`
    #define the type
    type Product{
        id: Int,
        name:String,
        price:Float
    }
 
    #define the query
    type Query{
        #return all products
 
        getAllProducts:[Product]
 
        #return Products by Name
        #..list goes on to fetch the products
    }
`)
 
 
//3. Product sample data
 
const productsData=[
    {id:1, name:'Laptop',price:56000},
    {id:2, name:'Keyboard',price:2500},
    {id:3, name:'Headset',price:6000},
    {id:4, name:'Printer',price:25000},
    {id:5, name:'Joystick',price:9000},
    {id:6, name:'Cooling pad',price:4000}  
]
 
//4. Resolver functions
const root = {
    getAllProducts:()=>{
        return productsData;
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
    app.listen(1234, ()=>{
        console.log("Server is running at port no 1234");
    });