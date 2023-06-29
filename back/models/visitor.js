const mongoose = require('mongoose');
const visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: v => /.@./.test(v),
            message: 'Email must contain @'
        }
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    association: {
        type: String,
        required: true
    },
    cooperation: {
        type: String
    },
    role: {
        type: String
    },
    linkedin: {
        type: String
    },
    spam: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Visitor', visitorSchema);