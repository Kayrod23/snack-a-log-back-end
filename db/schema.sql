DROP DATABASE IF EXISTS snacks_dev;
CREATE DATABASE snacks_dev;

\c snacks_dev;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    protein INT,
    fiber INT,
    added_sugar INT,
    sodium INT,
    is_favorite BOOLEAN
);