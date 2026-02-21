const {ApolloServer , gql} = require('apollo-server');
 
const typeDefs = gql`
    #Object type
    type Book{
        id: ID!
        title : String!
        author: String!
        genre: String!
    }
 
    #Input type  - as an input book type to add a new book
    input NewBook{
        title: String!
        author: String!
        genre: String!
    }
 
    #Query type
    type Query{
        getAllBooks:[Book!]!
        getBookByAuthor(author:String!):[Book!]!
    }
   
    #Mutation type  - includes the create, put and delete operations on the book type
    type Mutation{
        #Add a new book
            addBook(input: NewBook!):Book
 
        #Update an existing book
 
 
        #Delete a book
    }
 
`
 
 
//Book sample data
 
const booksData = [
    {id:1,title:'Harry Potter',author:'J K Rowling', genre:'Fantasy'},
    {id:2,title:'Ignite Minds',author:'Abdul Kalam', genre:'Science'},
    {id:3,title:'Two States',author:'Chetan Bhagat', genre:'General'},
    {id:4,title:'Harry Potter- The socreres stone',author:'J K Rowling', genre:'Fantasy'},
    {id:5,title:'Harry Potter',author:'J K Rowling', genre:'Fantasy'},
];
 
 
 
//resolver fucntions
const resolvers = {
    //Added the Query blcok
    Query:{
        getAllBooks:()=>booksData,
        getBookByAuthor:(_,{author})=>{
            return booksData.filter((book)=>book.author === author)
        }
    },
    //Add the Mutation block
    Mutation:{
 
    }
}
 
 
//apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
})
 
//run the server
server.listen().then(({url})=>{
    console.log(`GQL Apollo server is running on a default port no ${url}` );
});
 