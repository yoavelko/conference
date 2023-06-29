const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const mentorRoute = require('./routes/mentorRoute');
const visitorRoute = require('./routes/visitorRoute');
app.use(express.json())

app.use(cors());
mongoose.connect(process.env.SERVER, {})
    .then(() => {
        console.log('The mongeese chose to come');
    })
    .catch(err => {
        console.log('The mongeese chose not to come because ' + err);
    })

app.use('/mentor', mentorRoute);
app.use('/visitor', visitorRoute);

app.listen(3000, () => {
    console.log('banana initiated');
})