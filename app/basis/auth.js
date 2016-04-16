var localStrategy = require('passport-local').Strategy;

var models = require('./models');

var Strategy = new localStrategy(function(username, password, done) {
    models.Admin.findOne({
        username,
        password
    }).then(function(user) {
        if(!user) {
            return done(null, false);
        }
        else {
            return done(null, user);
        }
    }).catch(function(err) {
        return done(err);
    });
});

function auth(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/#unlog');
    }
}

exports.strategy = Strategy;
exports.auth = auth;