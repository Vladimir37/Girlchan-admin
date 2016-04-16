var models = require('../basis/models');
var errors = require('../basis/errors');

class Views {
    static login(req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('/panel');
        }
        else {
            res.render('pages/login');
        }
    }
    static panel(req, res, next) {
        res.render('pages/panel');
    }
    static langs(req, res, next) {
        Promise.all([models.Lang.find(), models.Board.find()]).then(function(data) {
            res.render('pages/langs', {
                langs: data[0],
                boards: data[1]
            });
        }).catch(function(err) {
            console.log(err);
            errors.e500(req, res, next);
        });
    }
    static boards(req, res, next) {
        Promise.all([models.Lang.find(), models.Board.find()]).then(function(data) {
            res.render('pages/boards', {
                langs: data[0],
                boards: data[1]
            });
        }).catch(function(err) {
            console.log(err);
            errors.e500(req, res, next);
        });
    }
}

module.exports = Views;