"use strict";

/**
 * @swagger
 * components:
 *   schemas:
 *     post:
 *       type: object
 *       required:
 *         - title
 *         - recipe
 *         - author
 *         - review
 *       properties:
 *         title:
 *           type: string
 *         recipe:
 *           type: string
 *         review:
 *           type: string
 *         author:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "post",
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
            recipe: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            author: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            review: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            tableName: "post",
            timestamps: true,
        },
    );
};
