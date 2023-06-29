const Visitor = require('../models/visitor');

exports.fetchAll = async (req, res) => {
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
        if (req.body.association !== 'alumni' && req.body.association !== 'partner') {
            res.status(400).send({ message: 'Association must be alumni or partner' })
        }
        else {
            const visitor = await Visitor.create({ ...req.body, status: 'pending' })
            res.send({ message: 'Success', data: visitor })
        }
    }
    catch (err) {
        if (err.message.includes('duplicate')) {
            if (err.message.includes('email')) {
                res.status(400).send('Email must be unique')
            }
            else if (err.message.includes('phone')) {
                res.status(400).send('Phone must be unique')
            }
        }
        else {
            res.send(err.message)
        }
    }
}

exports.status = async (req, res) => {
    try {
        const { id, status } = req.body;
        if (!(status === 'pending' || status === 'approved' || status === 'denied')) {
            res.status(400).send({ message: 'Status must be pending, approved, denied' })
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

exports.statusUpdateBulk = async (req, res) => {
    try {
        if (!(req.body.status === 'pending' || req.body.status === 'approved' || req.body.status === 'denied')) {
            res.req.body.status(400).send({ message: 'Status must be pending, approved, denied' })
        }
        else {
            await Visitor.updateMany(
                { _id: { $in: req.body.statusArray } },
                { $set: { status: req.body.status } },
                { multi: true, new: true }
            )
            const newList = await Visitor.find({})
            res.send({ message: `Successfully updated`, newList })
        }
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

exports.filterByStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!(status === 'pending' || status === 'approved' || status === 'denied')) {
            res.status(400).send({ message: 'Status must be pending, approved, denied' })
        }
        else {
            const filter = await Visitor.find({ status });
            res.send({ message: 'Filtered by ' + status, data: filter });
        }
    }
    catch (err) {
        res.send(err.message)
    }
}

exports.filterByAssociation = async (req, res) => {
    try {
        const { association } = req.body;
        if (!(association === 'alumni' || association === 'partner')) {
            res.status(400).send({ message: 'association must be alumni or partner' })
        }
        else {
            const filter = await Visitor.find({ association });
            res.send({ message: 'Filtered by ' + association, data: filter })
        }
    }
    catch (err) {
        res.send(err.message)
    }
}

exports.complexFilter = async (req, res) => {
    try {
        let filter;
        if (req.body.association && req.body.status) {
            if (req.body.association !== 'alumni' && req.body.association !== 'partner') {
                res.status(400).send({ message: 'association must be alumni or partner' })
            }
            else if (req.body.status !== 'pending' && req.body.status !== 'denied' && req.body.status !== 'approved') {
                res.status(400).send({ message: 'status must be pending, denied, or approved' })
            }
            else {

                filter = await Visitor.find({
                    association: req.body.association,
                    status: req.body.status
                })
            }
        }
        else if (req.body.association) {
            if (req.body.association !== 'alumni' && req.body.association !== 'partner') {
                res.status(400).send({ message: 'association must be alumni or partner' })
            }
            else {
                filter = await Visitor.find({ association: req.body.association })
            }
        }
        else if (req.body.status) {
            if (req.body.status !== 'pending' && req.body.status !== 'denied' && req.body.status !== 'approved') {
                res.status(400).send({ message: 'status must be pending, denied, or approved' })
            }
            else {
                filter = await Visitor.find({ status: req.body.status })
            }
        }
        res.send(filter)
    }
    catch (err) {
        res.send(err.message)
    }
}