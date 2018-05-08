var express = require('express');
var router = express.Router();
var index = require('../controller/index');


/* GET home page. */
router.get('/',index.index);
router.post('/contact', index.contact);
module.exports = router;
