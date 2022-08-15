import orderService from '../service/order.service.js'
class OrderController {
  async addOrder(req, res, next) {
    try {
      const { name, booking } = req.body;
      const menu = await orderService.add(name, booking, );

      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }

  async getOrder(req, res, next) {
    try {
      const menu = await orderService.getAll();
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }

  async changeOrder(req, res, next) {
    try {
      const {id, name, booking } = req.body;
      const menu = await orderService.update(id, name, booking);
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }
  async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      const menu = await orderService.delete(id);
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }
}


export default new OrderController();