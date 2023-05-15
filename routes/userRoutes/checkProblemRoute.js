const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const checkProblemController = require("../../controllers/userRouteController/checkProblemController");

router.post('/check/:slug', auth, checkProblemController);

module.exports = router;