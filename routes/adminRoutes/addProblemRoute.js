const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkAdmin = require("../../middleware/checkAdmin");
const addProblemController = require("../../controllers/adminRouteController/addProblemController");

router.post("/problem", auth, checkAdmin, addProblemController);

module.exports = router;