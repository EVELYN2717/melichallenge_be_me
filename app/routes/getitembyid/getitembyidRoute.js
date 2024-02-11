const express = require('express');
const router = express.Router();
const getItemByIdController = require('../../controller/getitembyid/getitembyidController');


/* GET home page. */
router.get('/:itemId', getItemByIdController.getItemById);

module.exports = router;