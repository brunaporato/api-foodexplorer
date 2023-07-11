const { Router } = require("express");
const CategoriesController = require("../controllers/CategoriesController");
const categoriesRoutes = Router();

const categoriesController = new CategoriesController();

categoriesRoutes.post("/:user_id", categoriesController.create);
categoriesRoutes.get("/", categoriesController.index);


module.exports = categoriesRoutes;