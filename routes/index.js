var express = require('express');
var router = express.Router();
var models = require('../public/javascripts/iphoneModels.json');
var carriers = require("../public/javascripts/carriers.json");

/* GET home page. */
router.get('/phonecheck', function (req, res, next) {
	res.render('index', {
		title: 'Website Playground',
		modelArray: models,
		carriers: carriers
	});
});

router.get("/formReturn", function (req, res, next) {
	res.render('formReturn', {
		title: 'Form Return'
	});
});

router.post("/formReturn", (req, res) => {
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
