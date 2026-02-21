const {ApolloServer , gql} = require('apollo-server');
const { title } = require('process');
 
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
        addBook:(_,{input})=>{
            const newBook={
                id: booksData.length + 1,
                // title: input.title,
                // author: input.author,
                // genre: input.genre
 
                //Or use the spread operator to get all the book details from the input object
                ...input
            };
            //Add the Book object to the Bookdata array
            booksData.push(newBook);
 
            //REturn the bookdata array with the newly added book
            return newBook;
        }
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
 
 
//default apollo server port no is 4000
 
//execution : node name.js
//http://localhost:4000/

//query to run on server to see o/p
// mutation($input: NewBook!){
//   addBook(input: $input) {
//       title
//       author
//       genre
//   }
 
// }
 
// query{
//   getAllBooks {
//     author
//     genre
//     title
//   }
// }

// Variable
// {
//   "input":{
//             "title":"Harry Potter5",  
//             "genre":"Fantasy",
//             "author":"J K Rowling"  
//         }
// }