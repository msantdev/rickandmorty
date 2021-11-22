const User = require("../models/User");

exports.userFavorites = async (req, res, next) => {
  const { username } = req.query;
  try {
    const { characters } = await User.findOne({ username: username });
    res.status(200).send({ characters });
  } catch (error) {
    res.status(401).send({ error });
  }
};
exports.setFavorite = async (req, res, next) => {
  let id = parseInt(req.params.id);
  const { username, name } = req.body;

  const newFavorite = {
    id,
    name,
  };
  try {
    const exists = await User.findOne({ "characters.id": id });
    if (!exists) {
      const { characters } = await User.findOneAndUpdate(
        { username },
        {
          $addToSet: {
            characters: {
              id,
              name,
            },
          },
        }
      );
    } else {
      const { characters } = await User.findOneAndUpdate(
        { username },
        {
          $pull: {
            characters: {
              id,
              name,
            },
          },
        }
      );
    }

    res.status(200).send({ id, name });
  } catch (error) {
    res.status(401).send({ error });
  }
};
