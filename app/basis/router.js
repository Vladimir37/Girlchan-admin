var express = require('express');

var view = require('../controllers/views');
var api = require('../controllers/api');
var auth = require('./auth').auth;

var router = express.Router();

router.get('/', view.login.bind(view));
router.get('/panel', auth, view.panel.bind(view));
router.get('/langs', auth, view.langs.bind(view));
router.get('/boards', auth, view.boards.bind(view));

router.post('/login', api.login.bind(api));
router.post('/lang', api.language.bind(api));
router.post('/board', api.board.bind(api));
router.post('/restart', api.restart.bind(api));

module.exports = router;