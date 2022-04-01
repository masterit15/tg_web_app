const sequelize = require("sequelize");
const db = require('../db')
const UserModel = require('../model/users.model')
const Tokens = db.define("tokens", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  refreshToken: { type: sequelize.TEXT, allowNull: true },
})
UserModel.hasMany(Tokens, { onDelete: "cascade"})
module.exports = Tokens