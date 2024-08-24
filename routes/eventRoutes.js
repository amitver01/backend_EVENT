const express = require("express");
const multer = require("multer");
const { createEvent, getEvents, getEventById, likeEvent } = require("../controllers/eventControllers");
const authMiddleware = require("../middlewares/authMiddleware"); // Adjust the path as needed

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Routes with authentication
router.post("/createEvent", upload.single("image"), createEvent); //create event
router.get("/events",  getEvents);// get all event
router.get("/event/:id", getEventById); // get specific event by id
router.post("/event/:eventId/like", likeEvent); //

module.exports = router;
