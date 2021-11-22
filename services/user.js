const UserModel = require("../models/User");
exports.create = async (username, password) => {
  const user = await UserModel.create({ username, password });
  return user;
};

exports.get = async (username) => {
  const user = await UserModel.findOne({ username }).select("+password");
  return user;
};
