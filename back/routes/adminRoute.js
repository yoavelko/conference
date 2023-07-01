const express = require('express');
const { create, login, verify } = require('../controllers/adminController');
const router = express.Router();

router.post('/create', create);
router.post('/login', login);
router.post('/verify', verify)

module.exports = router;