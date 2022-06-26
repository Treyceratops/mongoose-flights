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

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date,
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: () => {
            const defaultDate = new Date();

            defaultDate.setFullYear(
                defaultDate.getFullYear() + 1
            )

            return defaultDate;
        },
    },
    destinations: [destinationSchema],
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);