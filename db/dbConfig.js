const pgp = require("pg-promise");
require("dotenv").config();

const cn = {
    host: process.env.PG_HOST || "localhost",
    port: process.env.PG_PORT || "5612",
    database: process.env.PG_DATABASE || "snacks_dev",
    user: process.env.PG_USER || "postgres",
};

const db = pgp(cn);

module.exports = db;