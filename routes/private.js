const express = require("express");
const router = express.Router();
const { userFavorites, setFavorite } = require("../controllers/private");
const { protect } = require("../middleware/auth");

router.route("/characters/favorites").get(protect, userFavorites);
router.route("/characters/favorites/:id").patch(protect, setFavorite);

module.exports = router;
