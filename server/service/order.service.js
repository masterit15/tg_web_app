import OrderModel from '../model/orders.model.js'
import ApiError from '../exceptions/api-error.js'
import 'dotenv/config'
import QRCode from 'qrcode'
class OrderService {
  async add(name, booking) {
    const existingOrder = await OrderModel.findOne({ where: { name }, raw: true })
    if (existingOrder) {
      throw ApiError.BadRequest(`Стол с таким названием ${name} уже существует`)
    }
    const order = await OrderModel.create({ name, booking })
    const qr_code = await QRCode.toDataURL(`${process.env.CLIENT_URL}/order/?id=${order.id}`)
    await OrderModel.update({ qr_code }, { where: { id: order.id } })
    return {qr_code,...order.dataValues}
  }
  // async generateQrCode(order){
  //   return new Promise((resolve, reject)=>{
  //     QRCode.toDataURL(`${process.env.CLIENT_URL}/order/?id=${order.id}`, function (err, url) {
  //       if(err){
  //         reject(err)
  //       }else{
          
  //         resolve(url)
  //       }
  //     })
  //   })
  // }
  async update(id, name, booking) {
    const order = await OrderModel.update({ name, booking }, { where: { id } })
    return order
  }
  async getAll() {
    const order = await OrderModel.findAll();
    return order;
  }
  async delete(id) {
    const order = await OrderModel.destroy({ where: { id } });
    return order;
  }

}

export default new OrderService();