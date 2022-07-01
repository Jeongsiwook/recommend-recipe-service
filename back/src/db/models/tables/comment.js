"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Comment",
        {
            id: {
                type: DataTypes.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            post: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            author: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            comment: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            tableName: "Comments",
            timestamps: true,
        },
    );
};
