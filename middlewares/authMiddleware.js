const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path as needed

const authMiddleware = async (req, res, next) => {
    try {
        // Get the token from the Authorization header
        const token = req.headers.authorization?.split(' ')[1]; // Assumes token is in the format "Bearer <token>"

        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret

        // Find the user based on the token's user ID
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Access denied. Invalid token.' });
        }

        // Attach user to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ message: 'Access denied. Invalid token.' });
    }
};

module.exports = authMiddleware;
