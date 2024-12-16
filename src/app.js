require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const userRoutes = require("./route/User/userRoutes");
const DataBase = require("./service/db");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("combined"));
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  DataBase.getInstance();
  console.log(`server started http://localhost ${PORT}`);
});

module.exports = app;
