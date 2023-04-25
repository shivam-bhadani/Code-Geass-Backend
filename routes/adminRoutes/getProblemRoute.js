const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkAdmin = require("../../middleware/checkAdmin");
const getProblemController = require("../../controllers/adminRouteController/getProblemController");

router.get("/problem/:slug", auth, checkAdmin, getProblemController);

module.exports = router;