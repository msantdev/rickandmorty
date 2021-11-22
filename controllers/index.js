const userService = require("../services/user");
const characters = require("../services/characters");

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      error: "Please provide user and password",
    });
  }
  try {
    const user = await userService.get(username);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "Invalid Credentials" });
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        error: "Invalid credentials",
      });
    }
    sendToken(user, 200, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  const alreadyExists = await userService.get(username);
  if (alreadyExists) {
    return res.status(500).json({
      success: false,
      error: "Username already taken",
    });
  }
  try {
    const user = await userService.create(username, password);
    sendToken(user, 201, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
  });
};

exports.getCharacters = async (req, res, next) => {
  const { page } = req.query;
  const chars = await characters.getCharacters(page);
  res.status(200).send(chars);
};
