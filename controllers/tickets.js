const Ticket = require('../models/ticket');


module.exports = {
    create,
    show
};

function create(req, res) {
    Ticket.findById(req.params.id, function (err, ticket) {
        // We can push subdocs into Mongoose arrays
        console.log(ticket)
        console.log(req.params.id)
        // Save any changes made to the flight doc
        ticket.save(function (err) {
            // Step 5:  Respond to the Request (redirect if data has been changed)
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            console.log(flight)
            res.render('flights/show', { title: 'All Flights', flight, tickets });
        });
    });
}