var express = require('express');
var router = express.Router();
var models = require('../public/javascripts/iphoneModels.json')

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Website Playground',
		modelArray: models
	});
});

router.post("/", (req, res) => {
	const colour = req.body.colour;
	const deviceIMEI = req.body.deviceIMEI;
	const model = req.body.model;
	const condition = req.body.condition;
	
	console.log(req.body);
	
	if (!colour || !deviceIMEI || !model || !condition) {
		res.status(400).send('Invalid form data');
	} else {
		res.send("Form sent");
	}
});

module.exports = router;
