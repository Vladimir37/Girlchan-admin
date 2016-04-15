var express = require('express');

var Views = require('../controllers/views');
var API = require('../controllers/api');

var router = express.Router();
var view = new Views();

router.get('/', view.login.bind(view));

router.post('/login', API.login);

module.exports = router;