"use strict";

import User from "./user";
import Post from "./post";
import Recipe from "./recipe";
import Comment from "./comment";
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

const user = User(sequelize, Sequelize.DataTypes);
const post = Post(sequelize, Sequelize.DataTypes);
const recipe = Recipe(sequelize, Sequelize.DataTypes);
const comment = Comment(sequelize, Sequelize.DataTypes);

db["User"] = user;
db["Post"] = post;
db["Recipe"] = recipe;
db["Comment"] = comment;

db.User.sync();
db.Post.sync();
db.Recipe.sync();
db.Comment.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
