const express=require('express');
const router=express.Router();
const ctrlContact = require('../controllers/contactController');

router.get('/',ctrlContact.index);
router.post('/',ctrlContact.post);

module.exports = router;