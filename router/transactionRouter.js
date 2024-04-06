const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/transactionController');

router.post('/', ctrl.createTransaction);

module.exports = router;