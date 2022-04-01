const tableService = require('../service/table.service');
class TableController {
  async addTable(req, res, next) {
    try {
      const { name, booking } = req.body;
      const menu = await tableService.add(name, booking, );

      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }

  async getTable(req, res, next) {
    try {
      const menu = await tableService.getAll();
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }

  async changeTable(req, res, next) {
    try {
      const {id, name, booking } = req.body;
      const menu = await tableService.update(id, name, booking);
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }
  async deleteTable(req, res, next) {
    try {
      const { id } = req.params;
      const menu = await tableService.delete(id);
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }
}


module.exports = new TableController();