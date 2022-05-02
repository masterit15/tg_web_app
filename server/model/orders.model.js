import sequelize from 'sequelize'
import db from '../db/index.js'
import ClientModel from '../model/clients.model.js'
const Orders = db.define("orders", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  /**
  * createDate table
  * @param {Date} дата создания
  */
  createDate: { type: sequelize.DATE, defaultValue: sequelize.NOW },
  /**
  * status table
  * @param {String} [in_processing] в обработке
  * @param {String} [accept] принят
  * @param {String} [cook] готовится
  * @param {String} [done] готово
  * @param {String} [sent_for_delivery] передан в доставку
  * @param {String} [delivered] доставлен
  */
  status: {type: sequelize.ENUM, values:['in_processing','accept','cook', 'done', 'sent_for_delivery', 'delivered'], defaultValue: 'in_processing'},
  date: { type: sequelize.DATE, defaultValue: sequelize.NOW },
  total_amount: {type: sequelize.INTEGER, allowNull: true},
  successful_payment: {type: sequelize.JSON, allowNull: true}
})
/**
* связь таблицы Clients c Orders
* hasMany один к многим
*/
ClientModel.hasMany(Orders)
export default Orders