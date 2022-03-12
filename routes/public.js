const express = require("express");
const {upload} = require("../utils/file");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { 
    getAllUser,
    getAllProfile,
    getProfile,
} = require("../controllers/public");

router.route("/alluser").get(getAllUser);
router.route("/allprofile").get(getAllProfile);
router.route("/profile/:id").get(getProfile);


module.exports = router;
