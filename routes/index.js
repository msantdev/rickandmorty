const express = require("express");

const router = express.Router();

const { login, register, getCharacters } = require("../controllers/index");

router.post("/login", login);
router.post("/register", register);
router.get("/characters", getCharacters);

module.exports = router;
