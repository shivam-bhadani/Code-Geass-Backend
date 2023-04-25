const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const getUserController = require("../../controllers/userRouteController/getUserController");

router.get("/user", auth, getUserController);

module.exports = router;