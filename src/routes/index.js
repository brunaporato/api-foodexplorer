const { Router } = require("express");

const routes = Router();

const usersRouter = require("./users.routes");
const foodsRoutes = require("./foods.routes");
const categoriesRoutes = require("./categories.routes");
const foodsCategoryRoutes = require("./foodsCategory.routes");

routes.use("/users", usersRouter);
routes.use("/foods", foodsRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/foodsCategory", foodsCategoryRoutes);

module.exports = routes;