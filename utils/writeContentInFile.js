const path = require("path");
const fs = require("fs");

const writeContentInFile = async (fileDir, fileName, content) => {
    const filepath = path.join(fileDir, fileName);
    await fs.writeFileSync(filepath, content);
    return filepath;
};

module.exports = writeContentInFile;