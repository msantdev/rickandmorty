require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/", require("./routes"));
app.use("/api/private", require("./routes/private"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log("Logged error" + err);
  server.close(() => process.exit(1));
});
