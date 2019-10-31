const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

//Model for a feedback
var Feedback = mongoose.model('Feedback', {
    name: {type: String},
    email: {type: String},
    subject: {type: String},
    message: {type: String} 
});

//Creating the post route for our application
router.post('/', (req, res) => {
    var feedback = new Feedback ({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });
    feedback.save((err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Saving Feedback: ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;