var passport = require('passport');

var models = require('../basis/models');

function login(req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/main',
        failureRedirect: '/#incorrect'
    })(req, res, next);
}

exports.login = login;