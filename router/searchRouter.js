const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/searchController');

router.get('/search-by-name-or-barcode', ctrl.searchByNameOrBarcode);
router.get('/search-by-name', ctrl.searchByName);

// Barcode'a göre ürün arama
router.get('/search-by-barcode', ctrl.searchByBarcode);

// Description'a göre ürün arama
router.get('/search-by-description', ctrl.searchByDescription);

module.exports = router;