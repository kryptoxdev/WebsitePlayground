var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Website Playground'
	});
});

router.post("/", (req, res) => {
	const colour = req.body.colour;
	const deviceIMEI = req.body.deviceIMEI;
	
	console.log(req.body);
	
	if (!colour || !deviceIMEI) {
		res.status(400).send('Invalid form data');
	} else {
		res.send("Form sent");
	}
});

module.exports = router;
