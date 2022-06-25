"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "recipe",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            tableName: "recipe",
            timestamps: true,
        },
    );
};
