"use strict";

import Sequelize from "sequelize";
import { local, rds } from "../config/config";

const config = local;
const db = {};

const sequelize = new Sequelize(
    config.database, //
    config.username,
    config.password,
    config,
);

const user = require("./user")(sequelize, Sequelize.DataTypes);
const post = require("./post")(sequelize, Sequelize.DataTypes);
const recipe = require("./board")(sequelize, Sequelize.DataTypes);
const comment = require("./comment")(sequelize, Sequelize.DataTypes);

db["User"] = user;
db["Post"] = post;
db["Recipe"] = recipe;
db["Comment"] = comment;

db.user.sync();
db.post.sync();
db.recipe.sync();
db.comment.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    throw new Error("Unable to connect to the database:", error);
}

module.exports = db;
