const sequelize = require("sequelize")
const db = require('../db')
const Users = db.define("users", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: { type: sequelize.STRING, allowNull: false},
    login: { type: sequelize.STRING, allowNull: false},
    avatar: { type: sequelize.STRING, allowNull: true},
    password: { type: sequelize.STRING, allowNull: false},
    subscription: { type: sequelize.JSON, allowNull: true},
    permission: {type: sequelize.ENUM, values:['Руководитель','Сотрудник'], defaultValue: 'Сотрудник'},
  })

module.exports = Users