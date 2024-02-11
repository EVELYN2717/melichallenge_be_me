const express = require('express');
const router = express.Router();
const searchBoxController = require('../../controller/searchbox/searchboxController')

/* GET home page. */
router.get('/', searchBoxController.searchBox)


module.exports = router;