const { Router } = require("express");
const FoodsController = require("../controllers/FoodsController");
const foodsRoutes = Router();

const multer = require("multer");

const ensureAuth = require("../middleware/ensureAuth");
const uploadConfig = require("../configs/upload");

const foodsController = new FoodsController();

const upload = multer(uploadConfig.MULTER);


foodsRoutes.use(ensureAuth);

foodsRoutes.post("/", upload.single("image"), foodsController.create);
foodsRoutes.put("/:food_id", foodsController.update);
foodsRoutes.delete("/:food_id", foodsController.delete);
foodsRoutes.get("/:food_id", foodsController.show);
foodsRoutes.get("/", foodsController.index);


module.exports = foodsRoutes;