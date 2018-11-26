const kudos = require("../models/kudos");
const users = require("../models/users");

module.exports = function (app) {
    app.get('api/users', function (req, res) {           // * A GET route that retrieves all Users from the database.
        users.find({})
            .populate('kudos')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    app.get('/api/kudos', function (req, res) {
        kudos.find({})
            .populate('users')
            .then(function (data) {                         // * A GET route that retrieves all Kudos from the database.

                console.log('data', data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    app.post('/api/session', function (req, res) {
        User.find(req.body)                              // * A POST route to handle creating new Kudos.
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


}



