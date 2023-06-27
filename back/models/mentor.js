const mongoose = require('mongoose');
const mentorModel = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, validate: {
        validator: v => /.@./.test(v),
        message: 'Email must contain @'
    }},
    phone: {type: String}
})

module.exports = mongoose.model('Mentor', mentorModel);