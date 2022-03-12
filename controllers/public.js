const ErrorResponse = require("../utils/errorResponse");
const {deleteFile} = require("../utils/deleteFile");
const User = require("../models/User");
const Profile = require("../models/Profile");
const Photo = require("../models/Photo");

exports.getAllUser = (req, res, next) => {
    User.find({}, function(err,users) {
      return res.end(JSON.stringify(users));
    });
  };

exports.getAllProfile = (req, res, next) => {
  Profile.find({}, function(err,profiles) {
    return res.end(JSON.stringify(profiles));
  });
};