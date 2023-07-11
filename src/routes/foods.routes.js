const { Router } = require("express");
const FoodsController = require("../controllers/FoodsController");
const foodsRoutes = Router();

const foodsController = new FoodsController();

foodsRoutes.post("/:user_id", foodsController.create);
foodsRoutes.put("/:user_id/:food_id", foodsController.update);
foodsRoutes.delete("/:food_id", foodsController.delete);
foodsRoutes.get("/:food_id", foodsController.show);
foodsRoutes.get("/", foodsController.index);


module.exports = foodsRoutes;