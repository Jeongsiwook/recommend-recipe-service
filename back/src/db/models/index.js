// "use strict";

// import Sequelize from "sequelize";
// import User from "./tables/user";
// import Post from "./tables/post";
// import Recipe from "./tables/recipe";
// import Comment from "./tables/comment";
// import { local, rds } from "../config/config";

// const config = local;
// const db = {};

// const sequelize = new Sequelize(
//     config.database, //
//     config.username,
//     config.password,
//     config,
// );

// const user = User(sequelize, Sequelize.DataTypes);
// const post = Post(sequelize, Sequelize.DataTypes);
// const recipe = Recipe(sequelize, Sequelize.DataTypes);
// const comment = Comment(sequelize, Sequelize.DataTypes);

// db["User"] = user;
// db["Post"] = post;
// db["Recipe"] = recipe;
// db["Comment"] = comment;

// sequelize.sync();

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// try {
//     db.sequelize.authenticate();
//     console.log("✅ Connection has been established successfully.");
// } catch (error) {
//     console.error("❌ Unable to connect to the database:", error);
// }

// module.exports = db;
