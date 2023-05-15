const Problem = require("../../models/problem");

const getProblemController = async (req, res) => {
    try {
        let slug = req.params.slug;
        const problem = await Problem.findOne({slug});
        if(!problem) {
            return res.status(400).json({message: "No Problem Found"});
        }
        res.status(200).json(problem);
    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = getProblemController;