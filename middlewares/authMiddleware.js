const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path as needed

const authMiddleware = async (req, res, next) => {
    try {
        // Get the token from the Authorization header
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: ' No token provided.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret

        // Find the user based on the token's user ID
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Access denied. Invalid token.' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ message: 'Access denied. Invalid token.' });
    }
};

module.exports = authMiddleware;
