const express = require("express");
const bodyParser = require("body-parser");
const { cityRepository } = require("./repository/city-repository");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const { City, Airport, Flight } = require("./models/index");
const { where } = require("sequelize");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on port no : ${PORT} `);
  });
};

setupAndStartServer();
