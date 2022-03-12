const ErrorResponse = require("../utils/errorResponse");
const {deleteFile} = require("../utils/deleteFile");
const User = require("../models/User");
const Profile = require("../models/Profile");
const Photo = require("../models/Photo");

exports.getAllUser = async (req, res, next) => {
    User.find({}, function(err,users) {
      return res.end(JSON.stringify(users));
    });
  };

exports.getAllProfile = async (req, res, next) => {
  Profile.find({}, function(err,profiles) {
    return res.end(JSON.stringify(profiles));
  });
};

exports.getProfile = async (req, res, next) => {
  var profileId = req.params.id;
  Profile.findOne({_id: profileId}, function(err, profile) {
    return res.status(200)
    .json({
      success: true,
      profile,
    });
  });
};