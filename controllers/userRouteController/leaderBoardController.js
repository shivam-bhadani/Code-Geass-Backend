const User = require("../../models/user");

const leaderBoardController = async (req, res) => {
    try {
        const users = await User.find();
        let leaderBoard = users.map((user, ind) => {
            return {
                name: user.name,
                score: user.score
            }
        });
        leaderBoard.sort((a, b) => b.score - a.score);
        leaderBoard = leaderBoard.map((user, ind) => {
            return {
                ...user,
                rank: ind+1
            }
        })
        res.status(200).json(leaderBoard);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({message: "Internal Serval Error"});
      }
}

module.exports = leaderBoardController;