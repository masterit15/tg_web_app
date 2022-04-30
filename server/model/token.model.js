import sequelize from 'sequelize'
import db from '../db/index.js'
import UserModel from '../model/users.model.js'
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
export default Tokens