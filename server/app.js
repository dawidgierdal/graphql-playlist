const express = require('express');
const schema = require('./schema/schema');
const { mongoose } = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

const app = express();

mongoose.connect('mongodb+srv://dawid:Testtest123!@cluster0.tuwvw9j.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening on port 4000')
})