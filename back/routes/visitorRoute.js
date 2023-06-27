const express = require('express');
const { fetch, create, status, filterByStatus } = require('../controllers/visitorController')
const router = express.Router();

router.get('/', fetch);
router.post('/create', create);
router.patch('/status', status);
router.post('/filterByStatus', filterByStatus);

module.exports = router;