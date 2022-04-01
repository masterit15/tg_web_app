const MenuModel = require('../model/menu.model')
const ApiError = require('../exceptions/api-error');
class MenuService {
  async add(title, description) {
    const existingMenu = await MenuModel.findOne({ where: { title }, raw: true })
    if (existingMenu) {
      throw ApiError.BadRequest(`Меню с таким названием ${title} уже существует`)
    }
    const menu = await MenuModel.create({ title, description })
    return menu
  }
  async update(id, title, description) {
    const menu = await MenuModel.update({ title, description }, { where: { id } })
    return menu
  }
  async getAll() {
    const menu = await MenuModel.findAll();
    return menu;
  }
  async delete(id) {
    const menu = await MenuModel.destroy({ where: { id } });
    return menu;
  }

}

module.exports = new MenuService();