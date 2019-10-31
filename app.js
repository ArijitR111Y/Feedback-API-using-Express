//Part-1(To be removed during actual integration)
//Database Connectivity
const mongoose = require('mongoose');

//Connecting to the database
const mongoUri = "mongodb://localhost:27017/iwp_db";
mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('[MLab] MongoDB connection for Feedback API Suceeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

//Part-2
//Creating model for feedback
//Included in feedbackController.js

//Part-3
//Creating an express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var feedbackController = require('./feedbackController.js');

var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:4200', 'http://127.0.0.1:4200'] }));
app.use('/', feedbackController);



app.listen(3000, () => console.log('Server started at port : 3000'));