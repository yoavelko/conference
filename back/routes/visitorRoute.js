const express = require('express');
const { fetchAll, create, status, filterByStatus, statusUpdateBulk, filterByAssociation } = require('../controllers/visitorController')
const router = express.Router();

router.get('/', fetchAll);
router.post('/create', create);
router.patch('/status', status);
router.post('/filter-by-status', filterByStatus);
router.post('/filter-by-association', filterByAssociation);
router.patch('/bulk-status-update', statusUpdateBulk);

module.exports = router;