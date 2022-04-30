import foodService from '../service/food.service.js'
class FoodController {
  async addFood(req, res, next) {
    try {
      const {
      name,
      images,
      price,
      weight,
      portion,
      properties,
      description,
      } = req.body;
      const food = await foodService.add({
        name,
        images,
        price,
        weight,
        portion,
        properties,
        description
        });
      return res.json(food);
    } catch (e) {
      next(e);
    }
  }

  async getFood(req, res, next) {
    try {
      const food = await foodService.getAll();
      return res.json(food);
    } catch (e) {
      next(e);
    }
  }

  async changeFood(req, res, next) {
    try {
      const {
        id,
        name,
        images,
        price,
        weight,
        portion,
        properties,
        description,
        } = req.body;
      const food = await foodService.update(
        id,
        name,
        images,
        price,
        weight,
        portion,
        properties,
        description);
      return res.json(food);
    } catch (e) {
      next(e);
    }
  }
  async deleteFood(req, res, next) {
    try {
      const { id } = req.params;
      const food = await foodService.delete(id);
      return res.json(food);
    } catch (e) {
      next(e);
    }
  }
}


export default new FoodController();