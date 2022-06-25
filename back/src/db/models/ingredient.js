"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "comment",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
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
            tableName: "comment",
            timestamps: true,
        },
    );
};
