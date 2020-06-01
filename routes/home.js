const express = require("express");
const StaticController = require("../controllers/static_controller").StaticController();
const router = express.Router();

router.get("/", StaticController.home);

module.exports = router;
