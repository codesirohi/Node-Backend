const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send(`<h2> Working </h2>`);
});

app.listen(port, () => {
  console.log(`[server]: server is running at https:localhost:${port}`);
});
