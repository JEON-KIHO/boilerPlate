const mongoose = require('mongoose');
const config = require('./config/Key');

const connect = mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
})

module.exports = connect;