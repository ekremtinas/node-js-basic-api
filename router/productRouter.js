const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');

// Ürün oluşturma
router.post('/', ctrl.createProduct);

// Tüm ürünleri getirme
router.get('/', ctrl.getProducts);

// ID'ye göre bir ürünü getirme
router.get('/:ProductId', ctrl.getProductById);

// Bir ürünü güncelleme
router.put('/:ProductId', ctrl.updateProduct);

// Bir ürünü silme
router.delete('/:ProductId', ctrl.deleteProduct);


module.exports = router;