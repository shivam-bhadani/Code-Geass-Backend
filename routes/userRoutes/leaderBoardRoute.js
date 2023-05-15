const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const leaderBoardController = require("../../controllers/userRouteController/leaderBoardController");

router.get("/leader-board", auth, leaderBoardController);

module.exports = router;