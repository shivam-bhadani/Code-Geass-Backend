const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const runCodeController = require("../../controllers/userRouteController/runCodeController");

router.post('/run', auth, runCodeController);

module.exports = router;