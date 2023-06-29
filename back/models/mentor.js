const mongoose = require('mongoose');
const mentorModel = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String, required: true, unique: true, validate: {
            validator: v => /.@./.test(v),
            message: 'Email must contain @'
        }
    },
    phone: { type: String, required: true, unique: true },
    background: { type: String, required: true }
})

module.exports = mongoose.model('Mentor', mentorModel);