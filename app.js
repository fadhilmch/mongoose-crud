const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes');

const PORT = 3000;
const dbURL = 'mongodb://localhost/mongoose-crud';

const db = mongoose.connection;
const app = express();

app.use(bodyParser.urlencoded({
    extended:false
}));


app.use('/', router);

mongoose.connect(dbURL, err => {
    if(!err)
        console.log('Connected to database');
    else
        console.log('Error Connect to database');
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})
