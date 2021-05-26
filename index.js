const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('./mongoose');

mongoose.then(() => console.log('MongoDB Connected......'))
    .catch(err => console.log('err......... : ' + err))



app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(port, () => { console.log(`connected port:${port}`) });