// Fragments - block of code to be reused
 
const {ApolloServer, gql} = require('apollo-server');
 
const typeDefs = gql`
    # Define the type
    type Product{
        pid: ID!
        pname: String!
        pprice: Float!  
    }
 
    # Defind the query
    type Query{
        getProductByName(name:String!): Product
 
        getAllProducts:[Product!]!
    }
`
 
const productsData=[
    {pid:1, pname:"Laptop", pprice:45000.00},
    {pid:2, pname:"Tablet", pprice:25000.00},
    {pid:3, pname:"Mobile", pprice:15000.00}
];
 
const resolvers={
    //Query includes the business logic for two methods defined in the schema 1. GetProductByName() 2. getAllProducts()
    Query:{
        getProductByName:(_,{name})=>{
            return productsData.find((product)=>product.pname===name);
        },
 
        getAllProducts:()=> {
            return productsData
        }
    }  
};
 
 
const server = new ApolloServer({
    typeDefs,
    resolvers
})
 
server.listen(1010).then(({url})=>{
    console.log(`GQL Apollo server with Fragments is running at the default port number ${url}`);
});

// query for server
// fragment Prodfragment on Product{
//   pid
//   pname
//   pprice
// }

// query($name: String!){
//   getAllProducts {
//     ...Prodfragment
//   }
//   getProductByName(name: $name) {
//     ...Prodfragment
//   }
// }

// Variable
// {
//   "name" : "Mobile"
// }