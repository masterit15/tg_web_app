import sequelize from 'sequelize'
import db from '../db/index.js'
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

export default Menu