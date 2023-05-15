const path = require("path");
const generateFile = require("../../compiler/generateFile");
const executeCpp = require("../../judge/executeCpp");
const Problem = require("../../models/problem");
const executePy = require("../../judge/executePy");
const User = require("../../models/user");

const checkProblemController = async (req, res) => {
    try {
        let slug = req.params.slug;
        const problem = await Problem.findOne({ slug });
        if (!problem) {
            return res.status(400).json({ message: "No Problem Found" });
        }
        const { lang, code } = req.body;
        if (!code) {
            res.status(400).json({ "message": "Empty Code Body" });
            return;
        }
        const filePath = await generateFile(lang, code);
        const inputPath = `${path.join(__dirname, '../../inputs')}/${slug}.txt`;
        let userOutput;
        if (lang === "cpp") {
            userOutput = await executeCpp(filePath, inputPath);
        }
        else if (lang == "py") {
            userOutput = await executePy(filePath, inputPath);
        }
        userOutput = userOutput.trim();
        // console.log(userOutput);
        // console.log("---");
        // console.log(problem.output);
        if (userOutput == problem.output) {
            let addScore;
            if (problem.difficulty == "Easy") {
                addScore = 10;
            }
            else if (problem.difficulty == "Medium") {
                addScore = 20;
            }
            else {
                addScore = 40;
            }
            const user = await User.findById(req.userId);
            if (!user.solvedProblems.includes(problem._id)) {
                user.solvedProblems.push(problem._id);
                user.score += addScore;
                await user.save();
            }
            return res.status(200).json("All Test Case Passed");
        }
        else {
            return res.status(200).json("Failing in Hidden Test Case");
        }

        return res.status(200).json(codeFilePath);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = checkProblemController;