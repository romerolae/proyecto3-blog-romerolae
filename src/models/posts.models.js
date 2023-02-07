const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Posts = db.define("posts", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    isPublished: {
        type: DataTypes.BOOLEAN,
            defaultValue: true
    },
});

module.exports = Posts;
