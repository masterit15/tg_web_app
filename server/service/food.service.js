import FoodModel from '../model/foods.model.js'
import ApiError from '../exceptions/api-error.js'
class FoodService {
  async add(name,images,price,weight,portion,properties,description) {
    const existingFood = await FoodModel.findOne({ where: { name }, raw: true })
    if (existingFood) {
      throw ApiError.BadRequest(`Блюдо с таким названием ${name} уже существует`)
    }
    const menu = await FoodModel.create({ name,images,price,weight,portion,properties,description })
    return menu
  }
  async update(id,name,images,price,weight,portion,properties,description) {
    const menu = await FoodModel.update({name,images,price,weight,portion,properties,description }, { where: { id } })
    return menu
  }
  async getAll() {
    const menu = await FoodModel.findAll();
    return menu;
  }
  async delete(id) {
    const menu = await FoodModel.destroy({ where: { id } });
    return menu;
  }
}
export default new FoodService();