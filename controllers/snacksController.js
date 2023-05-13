const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, updateSnack, deleteSnack } = require("../queries/snacks.js")

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

snacks.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSnack = await updateSnack(id, req.body);
    res.status(200).json(updatedSnack);
});

snacks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack.id) {
        res.status(200).json(deletedSnack);
    } else {
        res.status(404).json("Snack Not Found!");
    };
});

module.exports = snacks;