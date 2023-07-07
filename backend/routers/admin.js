const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const verifyJWT = require("../middleware/verifyToken");

router.post("/AddAdmin", adminController.handleCreateNewAdmin);
router.post("/LoginAdmin", adminController.checkAdmin);

router.patch("/users/:user_id", adminController.deleteUserFromWebSite);
router.get("/users", adminController.getAllUsersData);
router.get("/postsRequest", adminController.getAllPostsWherePending);
router.put("/postsAccept/:post_id", adminController.updatePostStatusAccept);
router.put("/postsReject/:post_id", adminController.updatePostStatusReject);
module.exports = router;
