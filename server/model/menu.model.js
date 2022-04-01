const sequelize = require("sequelize");
const db = require('../db')
const Menu = db.define("menu", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: { type: sequelize.STRING, allowNull: false},
    description: { type: sequelize.TEXT, allowNull: true},
  })

module.exports = Menu