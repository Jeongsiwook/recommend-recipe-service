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

const User = require("./user")(sequelize, Sequelize.DataTypes);
const Post = require("./post")(sequelize, Sequelize.DataTypes);
const Recipe = require("./board")(sequelize, Sequelize.DataTypes);
const Comment = require("./comment")(sequelize, Sequelize.DataTypes);

db["User"] = User;
db["Post"] = Post;
db["Recipe"] = Recipe;
db["Comment"] = Comment;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
