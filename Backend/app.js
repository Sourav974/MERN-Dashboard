const express = require("express");

const filterRoutes = require("./Routes/filterRoutes");

const app = express();
app.use(express.json());

app.use("/api/filters", filterRoutes);

module.exports = app;
