const User = require("../../models/user");

const getUserController = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        res.status(200).json(user);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({message: "Internal Serval Error"});
      }
}

module.exports = getUserController;