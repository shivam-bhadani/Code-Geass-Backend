const User = require("../models/user")

const checkAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if(!user) {
            res.status(403).json({message: "Forbidden Access"});
        }
        else if(user.role!=="admin") {
            res.status(403).json({message: "Forbidden Access"});
        }
        else {
            next();
        }
      } catch (err) {
        console.error(err.message);
        res.status(500).json({message: "Internal Serval Error"});
      }
}

module.exports = checkAdmin;