const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newAdmin = await Admin.create({
            ...req.body,
            password: hashedPassword
        });
        res.status(200).send({ message: 'success', data: newAdmin })
    }
    catch (err) {
        res.send(err.message);
    }
}

exports.login = async (req, res) => {
    try {
        const user = await Admin.findOne({ username: req.body.username });
        if (user) {
            const password = await bcrypt.compare(req.body.password, user.password);
            if (password) {
                const token = await jwt.sign(
                    { username: req.body.username },
                    process.env.SECRET,
                    { expiresIn: '24h' }
                )
                res.status(200).send({ message: 'Success', token })
            }
            else {
                res.status(400).send({ message: "Incorrect credentials" })
            }
        }
        else {
            res.status(400).send({ message: "Incorrect credentials" })
        }
    }
    catch (err) {
        res.send(err.message);
    }
}

exports.verify = async (req, res) => {
    try {
        const verify = await jwt.verify(req.body.token, process.env.SECRET);
        res.send({message: "Success", verify})
    }
    catch (err) {
        if(err.message === 'invalid signature') {
            res.status(400).send('invalid token')
        }
        else {
            res.status(500).send(err.message)
        }
    }
}