var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('testes', { title: 'Testes com Arduino - Sensor' , op: 'sensor LM35' });
});

module.exports = router;
