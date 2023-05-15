const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const getAllProblemsController = require("../../controllers/userRouteController/getAllProblemsController");

router.get("/problem", auth, getAllProblemsController);

module.exports = router;