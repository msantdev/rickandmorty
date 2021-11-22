const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Not user found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      message: error.message,
    });
  }
};
