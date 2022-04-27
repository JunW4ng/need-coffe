import BaseController from "./base.js";
import getCoffee from "../utils/client/coffee_client.js";

export default class CoffeeControler extends BaseController {
  CoffeeControler() {}

  // Returns either hot and iced coffee
  async hotCoffee(req, res) {
    try {
      const { isHotOrIced } = req.params;
      const coffeeArray = [];

      await getCoffee(isHotOrIced).then((data) => {
        data.forEach((coff) => {
          coffeeArray.push({
            id: coff.id,
            name: coff.title,
            description: coff.description,
            ingredients: coff.ingredients,
          });
        });
      });
      return super.Sucess(res, coffeeArray);
    } catch (error) {
      return super.InternalError(res, error);
    }
  }
}
