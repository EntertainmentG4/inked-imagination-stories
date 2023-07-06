const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const verifyJWT = require("../middleware/verifyToken");

router.post("/AddAdmin", adminController.handleCreateNewAdmin);
router.post("/LoginAdmin", adminController.checkAdmin);

module.exports = router;
