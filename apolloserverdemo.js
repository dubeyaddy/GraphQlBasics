//1. Import the packages
//2. Build the schema
//3. Prepare the data
//4. Resolver functions
//5. Execute the GQL server using Apollo Federation and the Apollo client
 
 
//1. Packages  ::: npm i apollo-server --force
//apollo server packages includes types, gql schema deinitions, query, server setup ...
const { ApolloServer , gql} = require('apollo-server');
 
//2. Build the schema
 
// create the gql types
 
const typeDefs = gql`
    # define object type
 
    type Product{
        id: Int
        name:String
        price:Float
    }
 
 
    # define query
 
    type Query{
        getProductByName(name:String): Product
    }
`
 
//3. Prepare product data
 
const productsData = [
     {id:1, name:'Laptop',price:56000},
    {id:2, name:'Keyboard',price:2500},
    {id:3, name:'Headset',price:6000},
    {id:4, name:'Printer',price:25000},
    {id:5, name:'Joystick',price:9000},
    {id:6, name:'Cooling pad',price:4000}  
]
 
 
// 4. REsolver functions
 
const resolvers = {
    Query:{
        getProductByName:(_,{name})=>{
            return productsData.find((product)=> product.name === name);
        },
    }
}
 
 
//5. Apollo server instance  - carries two parameters typeDefs, root resover function
const server = new ApolloServer({
    typeDefs,  //GQL schema
    resolvers, // resolver function
});
 
//6. Start running the server
server.listen(1122).then(({url})=>{
    console.log("Server is running at port no 1122");
});