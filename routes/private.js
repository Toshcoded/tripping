const express = require("express");
const {upload} = require("../utils/file");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { 
    getPrivateRoute, 
    getUser, 
    updateUserAvatar, 
    getUserAvatar,
    getUserProfile,
    postUserProfile,

} = require("../controllers/private");


router.route("/").get(protect, getPrivateRoute);

//user
router.route("/user").get(protect, getUser);

//profile
router.route("/user/profile").get(protect, getUserProfile);
router.route("/user/profile").post(protect, postUserProfile);



//avatar
router.route("/user/avatar").post(protect, upload.single('avatar'), updateUserAvatar);
router.route("/user/avatar").get(protect, getUserAvatar);


module.exports = router;
