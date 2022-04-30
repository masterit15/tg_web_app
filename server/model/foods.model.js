import sequelize from 'sequelize'
import db from '../db/index.js'
import MenuModel from './menu.model.js'
const Foods = db.define("foods", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: { type: sequelize.STRING, allowNull: false},
    images: { type: sequelize.TEXT, allowNull: true},
    price: { type: sequelize.INTEGER, allowNull: true},
    weight: { type: sequelize.INTEGER, allowNull: true},
    portion: { type: sequelize.INTEGER, allowNull: true},
    properties: { type: sequelize.JSON, allowNull: true},
    description: { type: sequelize.TEXT, allowNull: true},
  })
  MenuModel.hasMany(Foods);
export default Foods