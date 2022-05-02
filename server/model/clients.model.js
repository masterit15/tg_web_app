import sequelize from 'sequelize'
import db from '../db/index.js'
const Clients = db.define("clients", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: { type: sequelize.STRING, allowNull: false},
    tg_id: {type: sequelize.INTEGER, primaryKey: true, allowNull: true},
    phone: { type: sequelize.STRING, allowNull: true},
    source: {type: sequelize.ENUM, values:['web','tg','phone'], defaultValue: 'web'},
    avatar: { type: sequelize.STRING, allowNull: true},
    createDate: { type: sequelize.DATE, defaultValue: sequelize.NOW },
    subscription: { type: sequelize.JSON, allowNull: true},
  })

export default Clients