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
            post: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            author: {
                type: DataTypes.UUID,
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
            tableName: "comment",
            timestamps: true,
        },
    );
};
