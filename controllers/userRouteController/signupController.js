const User = require("../../models/user");

const signupController = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        
        // Create new User
        const user = new User({ name, email, password });
        await user.save();
        res.json("success");
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
}

module.exports = signupController;