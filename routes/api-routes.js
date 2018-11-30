const kudos = require("../models/kudos.js");
const users = require("../models/users.js");

module.exports = function (app) {
    app.get('/api/users', function (req, res) {           // * A GET route that retrieves all Users from the database.
        users.find({})
            .then(function (dbusers) {
                res.json(dbusers);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/users', function (req, res) {        
        users.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get('/api/kudos', function (req, res) {
        kudos.find({})
            .populate('to')
            .populate('from')
            .then(function (data) {                         // * A GET route that retrieves all Kudos from the database.
            res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    app.post('/api/kudos', function (req, res) {
        const newEntry= {
            title: req.body.title,
            message: req.body.message,
            to: req.body.to,
            from: req.body.from
        }
        kudos.create(newEntry)                              // * A POST route to handle creating new Kudos.
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    // app.post('/api/kudos', function (req, res) {
    //     console.log(req.body)
    //     const userId = req.body.userId;
    //     const newEntry = {
    //       title: req.body.title,
    //       from: req.body.from,
    //       to: req.body.to,
         
    //       body: req.body.message
       
    //     }
    
    //     kudos.create(newEntry)
    //       .then(function (kudoData) {
            
    //       // If kudo post was created successfully, find the user and push the new kudo id _id to the User's `kudos` array
    //       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
    //       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
    //       return users.findOneAndUpdate({_id: userId}, { $push: { kudos: kudoData._id } }, { new: true });
    //     })
    //     .then(function(kudoData) {
      
    //       res.json(kudoData);
    //     })
    //     .catch(function (err) {
    //       res.json(err);
    //     });
        
    //   });


}



