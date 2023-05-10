const express = require("express");
const app = express();
const cors = require("cors");
const snacksController = require("./controllers/snacksController.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Snack-a-log");
});

app.use("/snacks", snacksController)

app.get("*", (req, res) => {
    res.status(404).json({error: "Not Found"});
})

module.exports = app;