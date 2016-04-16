var passport = require('passport');

var models = require('../basis/models');
var errors = require('../basis/errors');

class API {
    static login(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/panel',
            failureRedirect: '/#incorrect'
        })(req, res, next);
    }
    static language(req, res, next) {
        var lang_addr = req.body.addr;
        var lang_name = req.body.name;
        models.Lang.create({
            addr: lang_addr,
            name: lang_name
        }).then(function() {
            return models.Board.find();
        }).then(function(boards) {
            boards.map(function(board) {
                board.set('names.' + lang_addr, req.body["board_" + board.addr]);
                return board.save();
            });
            return boards;
        }).then(function() {
            res.redirect('/langs#success');
        }).catch(function(err) {
            console.log(err);
            errors.e500(req, res, next);
        });
    }
    static board(req, res, next) {
        var board_addr = req.body.addr;
        models.Lang.find().then(function(langs) {
            var board_names = {};
            langs.forEach(function(lang) {
                board_names[lang.addr] = req.body["lang_" + lang.addr];
            });
            return models.Board.create({
                addr: board_addr,
                names: board_names
            });
        }).then(function() {
            res.redirect('/boards#success');
        }).catch(function(err) {
            console.log(err);
            errors.e500(req, res, next);
        });
    }
}

module.exports = API;