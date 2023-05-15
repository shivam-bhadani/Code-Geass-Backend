const executeCpp = require("../../compiler/executeCpp");
const executePy = require("../../compiler/executePy");
const generateFile = require("../../compiler/generateFile");


const runCodeController = async (req, res) => {
    try {
        const { lang, code, input } = req.body;

        if (!code) {
            res.status(400).json({ "message": "Empty Code Body" });
            return;
        }

        const filePath = await generateFile(lang, code);

        console.log(input);

        if (lang === "cpp") {
            const output = await executeCpp(filePath, input);
            return res.status(200).json(output);
        }

        if(lang == "py") {
            const output = await executePy(filePath, input);
            return res.status(200).json(output);
        }

        return res.status(200).json("failed");
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = runCodeController;