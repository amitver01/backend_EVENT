const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {
    try {
        const ticketDetails = req.body;
        const newTicket = new Ticket(ticketDetails);
        await newTicket.save();
        return res.status(201).json({ ticket: newTicket });
    } catch (error) {
        console.error("Error creating ticket:", error);
        return res.status(500).json({ error: "Failed to create ticket" });
    }
};

exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        console.error("Error fetching tickets:", error);
        res.status(500).json({ error: "Failed to fetch tickets" });
    }
};

exports.getTicketsByUserId = (req, res) => {
    const userId = req.params.userId;

    Ticket.find({ userid: userId })
        .then((tickets) => {
            res.json(tickets);
        })
        .catch((error) => {
            console.error("Error fetching user tickets:", error);
            res.status(500).json({ error: "Failed to fetch user tickets" });
        });
};

exports.deleteTicket = async (req, res) => {
    try {
        const ticketId = req.params.id;
        await Ticket.findByIdAndDelete(ticketId);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting ticket:", error);
        res.status(500).json({ error: "Failed to delete ticket" });
    }
};
