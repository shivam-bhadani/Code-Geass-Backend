const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
           return res.status(401).json({ message: 'No user found with this email' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Password is incorrect' });
        }
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = loginController;