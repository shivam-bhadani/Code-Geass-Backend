const Problem = require("../../models/problem");

const editProblemController = async (req, res) => {
    try {
        await Problem.findOneAndUpdate({_id: req.params.id}, req.body);
        res.status(200).json("success");
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = editProblemController;