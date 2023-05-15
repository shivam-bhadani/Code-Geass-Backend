const Problem = require("../../models/problem");
const User = require("../../models/user");

const getAllProblemsController = async (req, res) => {
    try {
        const problems = await Problem.find();
        const user = await User.findById(req.userId);
        const problemsWithAction = problems.map((problem) => {
          return {
            _id: problem._id,
            slug: problem.slug,
            title: problem.title,
            difficulty: problem.difficulty,
            action: user.solvedProblems.includes(problem._id) ? "Solved": "Unsolved"
          }
        })
        res.status(200).json(problemsWithAction);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({message: "Internal Serval Error"});
      }
}

module.exports = getAllProblemsController;