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
        const oneSnack = await db.oneOrNone("SELECT * FROM snacks WHERE id=$i, id");
        return oneSnack;
    } catch (error) {
        return {error: error};
    };
};

const createSnack = async (snack) => {
    try {
        const newSnack = await db.one(
            "INSERT INTO snacks (name, image, protein, fiber, added_sugar, sodium, is_favorite) RETURNING *",
            [snack.name, snack.image, snack.protein, snack.fiber, snack.added_sugar, snack.sodium, snack.is_favorite]
        );
        return newSnack;
    } catch (error) {
        throw (error);
    };
};

module.exports = {
    getAllSnacks,
    getSnack,
    createSnack,
}