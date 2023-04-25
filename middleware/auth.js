const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization');

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Set user ID in request object
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = auth;