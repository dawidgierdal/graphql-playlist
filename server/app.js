const express = require('express');
const schema = require('./schema/schema');
const { mongoose } = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_DB);
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