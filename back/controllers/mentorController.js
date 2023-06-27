const Mentor = require('../models/mentor');

exports.fetch = async (req, res) => {
    try {
        const data = await Mentor.find({});
        res.send({message: 'Success', data})
    }
    catch (err) {
        res.send(err.message)
    }
}