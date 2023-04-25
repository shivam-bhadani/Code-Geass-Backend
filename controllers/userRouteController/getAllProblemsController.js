const Problem = require("../../models/problem");

const getAllProblemsController = async (req, res) => {
    try {
        const problems = await Problem.find();
        res.status(200).json(problems);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({message: "Internal Serval Error"});
      }
}

module.exports = getAllProblemsController;