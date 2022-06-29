"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Ingredient",
        {
            id: {
                type: DataTypes.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            food: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            tableName: "Ingredients",
            timestamps: true,
        },
    );
};
