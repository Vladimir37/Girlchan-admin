var models = require('./app/basis/models');
var process = require('process');

function creating() {
    var name = process.argv[2];
    var pass = process.argv[3];
    if(!name || !pass) {
        console.log('Incorrect data!');
        return false;
    }
    models.Admin.create({
        username: name,
        password: pass
    }).then(function() {
        console.log('Admin successfully created!');
        return true;
    }).catch(function(err) {
        console.log('Error!');
        console.log(err);
        return false;
    })
}

creating();