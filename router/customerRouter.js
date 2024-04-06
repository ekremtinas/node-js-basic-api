const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/customerController');

// müşteri oluşturma
router.post('/', ctrl.createCustomer);

// Tüm müşterileri getirme
router.get('/', ctrl.getCustomers);

// ID'ye göre bir müşteri getirme
router.get('/:CustomerId', ctrl.getCustomerById);

// Bir müşteri güncelleme
router.put('/:CustomerId', ctrl.updateCustomer);

// Bir müşteri silme
router.delete('/:CustomerId', ctrl.deleteCustomer);

// İsme göre müşteri arama
router.get('/searchByName', ctrl.searchCustomersByName);


module.exports = router;