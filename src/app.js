require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRoutes = require("./route/User/userRoutes");
const trainRoutes = require("./route/Train/trainRoutes");
const adminRoutes = require("./route/Admin/adminRoutes");

const DataBase = require("./service/db");
const corsOptions = require("./config/corsOptions");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("combined"));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/user", userRoutes);
app.use("/api/train", trainRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`server started http://localhost ${PORT}`);
});

module.exports = app;
