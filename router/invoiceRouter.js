const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/invoiceController');

router.post('/get-invoices', ctrl.getInvoices);
router.post('/get-unpaid-invoices', ctrl.getUnpaidInvoices);

module.exports = router;