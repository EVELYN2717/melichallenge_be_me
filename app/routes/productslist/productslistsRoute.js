const express = require('express');
const router = express.Router();
const productlistController = require('../../controller/productslist/productlistController')

/* GET home page. */
router.get('/', productlistController.productList)

module.exports = router;