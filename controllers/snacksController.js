const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack } = require("../queries/snacks.js")

snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks();
    if (!allSnacks.error) {
        res.status(200).json(allSnacks);
    } else {
        res.status(500).json({ error: "Server Error" });
    };
});

snacks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const snack = await getSnack(id);
    if (snack) {
        res.status(200).json(snack);
    } else {
        res.status(404).json({ error: "Not Found!" })
    }
});

snacks.post("/", async (req, res) => {
    try {
        const snack = await createSnack(req.body);
        res.status(200).json(snack);
    } catch (error) {
        res.status(400).json({ error: error });
    };
});



module.exports = snacks;