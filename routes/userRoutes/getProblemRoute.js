const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const getProblemController = require("../../controllers/userRouteController/getProblemController");

router.get("/problem/:slug", auth, getProblemController);

module.exports = router;