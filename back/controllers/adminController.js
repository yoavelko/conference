const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const emailjs = require('@emailjs/browser');
const XMLHttpRequest = require('xhr2');

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
        res.send({ message: "Success", verify })
    }
    catch (err) {
        if (err.message === 'invalid signature') {
            res.status(400).send('invalid token')
        }
        else {
            res.status(500).send(err.message)
        }
    }
}

const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send', true);
xhr.setRequestHeader('Content-Type', 'application/json');
const interval = setInterval(async () => {
    if (new Date().valueOf() < new Date('2023-08-01,15:24:00').valueOf()) {
        if (new Date().valueOf() < new Date('2023-08-01,15:24:00').valueOf()) {
            let payload = {
                serviceID: 'service_u767x4d',
                templateID: 'cyberpro_confrence',
                templateParams: {
                    'name': 'test',
                    'email': "elzur.nitay@gmail.com"
                },
                publicKey: 'GsJXWtEpMGOvKuzDW'
            }
            // serviceID: 'service_u767x4d',
            // templateID: 'cyberpro_confrence',
            // publicKey: 'GsJXWtEpMGOvKuzDW'
            // await emailjs.send('service_u767x4d', 'cyberpro_confrence', {
            //     name: 'test',
            //     email: "elzur.nitay@gmail.com"
            // }, 'GsJXWtEpMGOvKuzDW')
            xhr.onload = () => {
                if(xhr.status === 200) {
                    console.log('success');
                }
                else {
                    console.log('fuck me', xhr.statusText);
                }
            }
            xhr.send(JSON.stringify(payload))
            clearInterval(interval);
        }
        console.log();
    }
    console.log('running');
}, 1000)