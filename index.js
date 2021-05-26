const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('./mongoose');
const { User } = require('./models/User');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.then(() => console.log('MongoDB Connected......'))
    .catch(err => console.log('err......... : ' + err))



app.get('/', (req, res) => {
    res.send('hello!!!');
})

app.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, info) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({success: true})
    });
})

app.listen(port, () => { console.log(`connected port:${port}`) });