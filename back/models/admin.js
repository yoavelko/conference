const mongoogse = require('mongoose');
const adminModel = mongoogse.Schema({
    username: {type:String, unique: true},
    password: {type: String, unique: true}
})

module.exports = mongoogse.model('Admin', adminModel);