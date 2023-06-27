const Visitor = require('../models/visitor');

exports.fetch = async (req, res) => {
    try {
        const data = await Visitor.find({});
        res.send({ message: 'Success', data })
    }
    catch (err) {
        res.send(err.message)
    }
}

exports.create = async (req, res) => {
    try {
        const visitor = await Visitor.create(req.body)
        res.send({ message: 'Success', data: visitor })
    }
    catch (err) {
        res.send(err.message)
    }
}

exports.status = async (req, res) => {
    try {
        const { id, status } = req.body;
        if (!(status === 'pending' || status === 'approved' || status === 'disapproved')) {
            res.status(400).send({ message: 'Status must be pending, approved, disapproved' })
        }
        else {
            const visitor = await Visitor.findByIdAndUpdate(id, { status }, { new: true })
            res.send({ message: "Success", data: visitor })
        }
    }
    catch (err) {
        res.send(err.message)
    }
}

exports.filterByStatus = async (req, res) => {
    try {
        const {status} = req.body;
        if(!(status === 'pending' || status === 'approved' || status === 'disapproved')) {
            res.status(400).send({ message: 'Status must be pending, approved, disapproved' })
        }
        else {
            const filter = await Visitor.find({status});
            res.send({message: 'Filtered by ' + req.body.status, data: filter});
        }
    }
    catch(err) {
        res.send(err.message)
    }
}