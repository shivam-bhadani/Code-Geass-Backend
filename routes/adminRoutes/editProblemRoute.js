const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkAdmin = require("../../middleware/checkAdmin");
const editProblemController = require("../../controllers/adminRouteController/editProblemController");

router.put("/problem/:id", auth, checkAdmin, editProblemController);

module.exports = router;