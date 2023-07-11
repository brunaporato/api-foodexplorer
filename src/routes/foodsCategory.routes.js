const { Router } = require("express");
const FoodsCategoryController = require("../controllers/FoodsCategoryController");
const foodsCategoryRoutes = Router();

const foodsCategoriesController = new FoodsCategoryController();

foodsCategoryRoutes.get("/", foodsCategoriesController.index);


module.exports = foodsCategoryRoutes;