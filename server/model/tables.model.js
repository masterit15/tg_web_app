const sequelize = require("sequelize");
const db = require('../db')
const UserModel = require('../model/users.model')
const Tables = db.define("tables", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: { type: sequelize.STRING, allowNull: true},
  booking: {type: sequelize.ENUM, values:['busy','not_busy'], defaultValue: 'not_busy'},
  qr_code: { type: sequelize.TEXT, allowNull: true},
})
UserModel.hasMany(Tables)
module.exports = Tables