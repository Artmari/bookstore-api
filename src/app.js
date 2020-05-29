const express = require("express");
const path = require("path");
const chalk = require("chalk");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const productsData = require("./store");

app.get("/api/products", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "products retrieved successfully",
    responce: productsData,
  });
});

app.listen(port, () => {
  console.log(chalk.greenBright("Server is up on port" + port));
});
