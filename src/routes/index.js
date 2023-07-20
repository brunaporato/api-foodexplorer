const { Router } = require("express");

const routes = Router();

const usersRouter = require("./users.routes");
const foodsRouter = require("./foods.routes");
const categoriesRouter = require("./categories.routes");
const foodsCategoryRouter = require("./foodsCategory.routes");
const sessionsRouter = require("./sessions.routes");

routes.use("/users", usersRouter);
routes.use("/foods", foodsRouter);
routes.use("/categories", categoriesRouter);
routes.use("/foodsCategory", foodsCategoryRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;