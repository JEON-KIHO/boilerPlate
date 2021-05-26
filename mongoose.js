const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb+srv://root:1234@boilerplate.8maqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
})

module.exports = connect;