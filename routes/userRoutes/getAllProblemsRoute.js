const express = require("express");
const router = express.Router();

const getAllProblemsController = require("../../controllers/userRouteController/getAllProblemsController");

router.get("/problem", getAllProblemsController);

module.exports = router;