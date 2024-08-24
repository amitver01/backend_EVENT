const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
   // owner: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    organizedBy: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true },
    location: { type: String, required: true },
   // participants: { type: Number, default: 0 },
  //  count: { type: Number, default: 0 },
   // income: { type: Number, default: 0 },
    ticketPrice: { type: Number, required: true },
    //quantity: { type: Number, required: true },
    image: { type: String, required: true },
    //likes: { type: Number, default: 0 },
  //  comments: { type: [String], default: [] },
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
