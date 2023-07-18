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
exports.deleteVisitor = async (req, res) => {
    try {
        const deleted = await Visitor.findByIdAndDelete(req.body._id)
        res.status(200).json(deleted)
    }
    catch (err) {
        res.status(500).json(err.message)
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
        const filterRequest = {
            status: "",
            association: "",
            linkedin: "",
            cooperation: ""
        }
        if (req.body.association) {
            if (req.body.association !== 'alumni' && req.body.association !== 'partner') {
                return res.status(400).send({ message: 'association must be alumni or partner' });
            }
            else {
                filterRequest.association = req.body.association;
            }
        }
        else delete filterRequest.association;
        if (req.body.status) {
            if (req.body.status !== 'pending' && req.body.status !== 'denied' && req.body.status !== 'approved') {
                return res.status(400).send({ message: 'status must be pending, denied, or approved' })
            }
            else {
                filterRequest.status = req.body.status;
            }
        }
        else delete filterRequest.status;
        if (req.body.linkedin && req.body.cooperation) {
            const filterRequest = await Visitor.find({
                ...filterRequest,
                cooperation: { $exists: true, $regex: /[^ ]/ },
                linkedin: { $exists: true, $ne: null }
            })
            return res.status(200).send(filterRequest)
        }
        if (req.body.linkedin) {
            const filterResult = await Visitor.find({
                ...filterRequest,
                linkedin: { $exists: true, $ne: null }
            });
            return res.status(200).send(filterResult)
        }
        else {
            delete filterRequest.linkedin;
        }
        if (req.body.cooperation) {
            const filterResult = await Visitor.find({
                ...filterRequest,
                cooperation: { $exists: true, $regex: /[^ ]/ }
            });
            return res.status(200).send(filterResult)
        }
        else {
            delete filterRequest.cooperation;
            const filterResult = await Visitor.find(filterRequest);
            return res.status(200).send(filterResult)
        }

    }
    catch (err) {
        res.status(500).send(err.message);
    }
}