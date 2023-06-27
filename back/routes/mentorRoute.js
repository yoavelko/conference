const express = require('express');
const { fetch } = require('../controllers/mentorController');
const router = express.Router();

router.get('/', fetch);

module.exports = router;