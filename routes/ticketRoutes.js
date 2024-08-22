const express = require("express");
const { createTicket, getTickets, getTicketsByUserId, deleteTicket } = require("../controllers/ticketController");

const router = express.Router();

router.post("/tickets", createTicket);
router.get("/tickets/:id", getTickets);
router.get("/tickets/user/:userId", getTicketsByUserId);
router.delete("/tickets/:id", deleteTicket);

module.exports = router;
