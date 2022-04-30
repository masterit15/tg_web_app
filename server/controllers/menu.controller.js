import menuService from '../service/menu.service.js'
class MenuController {
  async addMenu(req, res, next) {
    try {
      const { title, description } = req.body;
      const menu = await menuService.add(title, description);
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }

  async getMenu(req, res, next) {
    try {
      const menu = await menuService.getAll();
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }

  async changeMenu(req, res, next) {
    try {
      const {id, title, description } = req.body;
      const menu = await menuService.update(id, title, description);
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }
  async deleteMenu(req, res, next) {
    try {
      const { id } = req.params;
      const menu = await menuService.delete(id);
      return res.json(menu);
    } catch (e) {
      next(e);
    }
  }
}


export default new MenuController();