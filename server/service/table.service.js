const TableModel = require('../model/tables.model')
const ApiError = require('../exceptions/api-error');
require('dotenv').config()
const QRCode = require('qrcode')
class TableService {
  async add(name, booking) {
    const existingTable = await TableModel.findOne({ where: { name }, raw: true })
    if (existingTable) {
      throw ApiError.BadRequest(`Стол с таким названием ${name} уже существует`)
    }
    const table = await TableModel.create({ name, booking })
    const qr_code = await QRCode.toDataURL(`${process.env.CLIENT_URL}/table/?id=${table.id}`)
    await TableModel.update({ qr_code }, { where: { id: table.id } })
    return {qr_code,...table.dataValues}
  }
  // async generateQrCode(table){
  //   return new Promise((resolve, reject)=>{
  //     QRCode.toDataURL(`${process.env.CLIENT_URL}/table/?id=${table.id}`, function (err, url) {
  //       if(err){
  //         reject(err)
  //       }else{
          
  //         resolve(url)
  //       }
  //     })
  //   })
  // }
  async update(id, name, booking) {
    const table = await TableModel.update({ name, booking }, { where: { id } })
    return table
  }
  async getAll() {
    const table = await TableModel.findAll();
    return table;
  }
  async delete(id) {
    const table = await TableModel.destroy({ where: { id } });
    return table;
  }

}

module.exports = new TableService();