const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;
    } catch (error) {
        return {error: error}
    }
};

const getSnack = async (id) => {
    try {
        const oneSnack = await db.oneOrNone("SELECT * FROM snacks WHERE id=$1", id);
        return oneSnack;
    } catch (error) {
        return {error: error};
    };
};

const createSnack = async (snack) => {
    try {
        const newSnack = await db.one(
            "INSERT INTO snacks (name, image, protein, fiber, added_sugar, sodium, is_favorite) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [snack.name, snack.image, snack.protein, snack.fiber, snack.added_sugar, snack.sodium, snack.is_favorite]
        );
        return newSnack;
    } catch (error) {
        throw (error);
    };
};


const updateSnack = async (id, snack) => {
    try {
        const updatedSnack = await db.one(
            "UPDATE snacks SET name=$1, image=$2, protein=$3, fiber=$4, added_sugar=$5, sodium=$6, is_favorite=$7 WHERE id=$8 RETURNING *",
            [snack.name, snack.image, snack.protein, snack.fiber, snack.added_sugar, snack.sodium, snack.is_favorite, id]
        );
        return updatedSnack;
    } catch (error) {
        throw error;
    }
};

const deleteSnack = async (id) => {
    try {
        const deletedSnack = await db.one("DELETE FROM snacks WHERE id=$1 RETURNING *", [id]);
        return deletedSnack;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllSnacks,
    getSnack,
    createSnack,
    updateSnack,
    deleteSnack,
};