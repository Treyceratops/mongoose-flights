const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: mongoose.ObjectId,
        ref: 'Flight'
    }
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Ticket', ticketSchema);