const { Router } = require("express");
const CategoriesController = require("../controllers/CategoriesController");
const categoriesRoutes = Router();

const categoriesController = new CategoriesController();

const ensureAuth = require("../middleware/ensureAuth");

categoriesRoutes.post("/", ensureAuth,categoriesController.create);
categoriesRoutes.get("/", categoriesController.index);


module.exports = categoriesRoutes;