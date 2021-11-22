const axios = require("axios");
exports.getCharacters = async (page) => {
  const { data } = await axios.get(process.env.RICK_API_URL + page);
  return data;
};
