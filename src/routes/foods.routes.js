const { Router } = require("express");
const FoodsController = require("../controllers/FoodsController");
const foodsRoutes = Router();

const ensureAuth = require("../middleware/ensureAuth");

const foodsController = new FoodsController();

foodsRoutes.use(ensureAuth);

foodsRoutes.post("/", foodsController.create);
foodsRoutes.put("/:food_id", foodsController.update);
foodsRoutes.delete("/:food_id", foodsController.delete);
foodsRoutes.get("/:food_id", foodsController.show);
foodsRoutes.get("/", foodsController.index);


module.exports = foodsRoutes;