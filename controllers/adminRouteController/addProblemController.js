const Problem = require("../../models/problem");

const addProblemController = async (req, res) => {
    try {
        let problem = new Problem({...req.body, slug: "a"});
        await problem.save();
        res.status(201).json("success");
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = addProblemController;