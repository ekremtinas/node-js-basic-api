const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/paymentController');

router.post('/save', ctrl.savePayment);

module.exports = router;