"use strict";

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - recipe
 *         - author
 *         - review
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         title:
 *           type: string
 *         recipe:
 *           $ref: '#/components/schemas/Recipe'
 *         review:
 *           type: string
 *         author:
 *           $ref: '#/components/schemas/User'
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Post",
        {
            id: {
                type: DataTypes.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            recipe: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            author: {
                type: DataTypes.INTEGER(11),
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
            tableName: "Posts",
            timestamps: true,
        },
    );
};
