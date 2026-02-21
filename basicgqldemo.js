//Step1: Packages/ modules
 
//npm i graphql
 
const {graphql,buildSchema} = require('graphql');
    //graphql - used to execute the query
    //buildSchema - used to prepare the schema with the types and the queries
 
 
// Step2 : Schema
const schema = buildSchema(`
 
    # define the gql type
 
    # define the gql query
    type Query{
        message : String
    }
`);
 
 
//Step 3: Resovler functions
const output = {
    message:()=>{
        console.log("GraphQL Training on February 16th ");
    }
}
 
 
//Step 4: Execute the query
//grpahql is a promise object whic takes
    // resolved state as success, rejected state as failure and finally block of code
 
graphql({
    //3 parameters are passed
        //1. schema
        //2. source
        //3. resolver function
        schema : schema,
        source : '{message}',
        rootValue : output
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("End of the GQL query");
})