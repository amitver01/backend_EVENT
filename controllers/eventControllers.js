const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        eventData.image = req.file ? req.file.path : "";
        const newEvent = new Event(eventData);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res
        res.status(500).json({ error: "Failed to Post" });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch events from MongoDB" });
    }
};

exports.getEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch event from MongoDB" });
    }
};

exports.likeEvent = (req, res) => {
    const eventId = req.params.eventId;

    Event.findById(eventId)
        .then((event) => {
            if (!event) {
                return res.status(404).json({ message: "Event not found" });
            }

            event.likes += 1;
            return event.save();
        })
        .then((updatedEvent) => {
            res.json(updatedEvent);
        })
        .catch((error) => {
            console.error("Error liking the event:", error);
            res.status(500).json({ message: "Server error" });
        });
};
