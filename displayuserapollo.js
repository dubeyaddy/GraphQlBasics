const { ApolloServer , gql} = require('apollo-server');

const typeDefs = gql`
    # define object type
 
    type User{
        id: Int
        name:String
        age: Int
    }
 
 
    # define query
 
    type Query{
        getUserByName(name:String): User
        getUserById(id:Int): User
    }
`
const userData=[
    {id:1, name:'Lalu',age:56},
    {id:2, name:'Bhalu',age:25},
    {id:3, name:'Golu',age:60},
    {id:4, name:'Molu',age:25},
    {id:5, name:'Kalu',age:9},
    {id:6, name:'Salu',age:4}  
]

const resolvers = {
    Query:{
        getUserByName :(_,{name})=>{
            return userData.find((user)=> user.name === name);
        },
        getUserById :(_,{id}) => {
            return userData.find((user) => user.id === id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,  //GQL schema
    resolvers, // resolver function
});

server.listen(1123).then(({url})=>{
    console.log("Server is running at port no 1123");
});