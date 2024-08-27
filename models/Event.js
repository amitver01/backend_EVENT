const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
   // owner: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    organizedBy: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true },
    location: { type: String, required: true },
    ticketPrice: { type: Number, required: true },
    image: { type: String, required: true },

}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
