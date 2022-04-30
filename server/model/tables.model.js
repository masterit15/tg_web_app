import sequelize from 'sequelize'
import db from '../db/index.js'
import UserModel from '../model/users.model.js'
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
export default Tables