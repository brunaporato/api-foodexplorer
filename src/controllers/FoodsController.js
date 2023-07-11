const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class FoodsController {
  async create(req, res) {
    const { name, description, price, ingredients } = req.body;
    const { user_id } = req.params;

    //Categoria é criada a partir de rota própria -> é selecionada no frontend
    const { category } = req.query;

    const checkIfIsAdmin = await knex("users").select("isAdmin").where("id", user_id).first();

    if(checkIfIsAdmin.isAdmin !== 1) {
      throw new AppError("Rota autorizada somente para administradores")
    }

    const nameInUse = await knex("foods").where("name", name).first();

    if(nameInUse) {
      throw new AppError("Um prato com esse nome já está cadastrado")
    }

    const [food_id] = await knex("foods").insert({
      name,
      description,
      price,
      user_id,
      category
    });

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        food_id,
        user_id,
        name: ingredient
      }
    });

    await knex("ingredients").insert(ingredientsInsert);
    
    //Criar categoria a partir da criação de um prato -> tem que ter um campo para escrever a categoria no front end
    
    // const categoryExists = await knex("categories").select("id").where("name", category).first();
    // if(!categoryExists) {
    //   await knex("categories").insert({
    //     user_id,
    //     name: category
    //   });
    // }
    
    res.json();
  }

  async update(req, res) {
    let { name, description, price, ingredients } = req.body;
    const { user_id, food_id } = req.params;
    const { category } = req.query;

    const food = await knex("foods").where("id", food_id).first();
    if(!food) {
      throw new AppError("Prato não encontrado");
    }

    const foodWithThisName = await knex("foods").where("name", name).first();

    if(foodWithThisName && Number(food_id) !== foodWithThisName.id) {
      throw new AppError("Um prato com esse nome já está cadastrado");
    }

    if(!name) {
      name = food.name;
    }

    if(!description) {
      description = food.description;
    }

    if(!price) {
      price = food.price;
    }

    if(!category) {
      category = food.category;
    }

    if(ingredients) {
      await knex("ingredients").where("food_id", food.id).delete();
    }

    await knex("foods").where("id", food_id).update({ name, description, price, category });
    
    const splitIngredients = ingredients.map(ingredient => ingredient.trim());
    splitIngredients.forEach(async (ingredient) => await knex("ingredients").insert({ name: ingredient, food_id: food.id, user_id }))
    

    return res.json();
  }

  async delete(req, res) {
    const { food_id } = req.params;

    await knex("foods").where("id", food_id).delete();

    return res.json();
  }

  async show(req, res) {
    const {food_id} = req.params;

    const food = await knex("foods").where("id", food_id).first();
    const ingredients = await knex("ingredients").where({food_id}).orderBy("name");

    if(!food) {
      throw new AppError("Prato não encontrado");
    }

    return res.json({
      ...food,
      ingredients
    });
  }

  async index(req, res) {
    const {name, ingredients} = req.query;

    let foods;

    if(ingredients) {
      const filterIngredients = ingredients.split(",").map(ingredient => ingredient.trim());

      foods = await knex("ingredients")
      .select([
        "foods.id",
        "foods.name",
        "foods.price",
        "foods.description"
      ])
      .whereLike("foods.name", `%${name}%`)
      .whereIn("ingredients.name", filterIngredients)
      .innerJoin("foods", "foods.id", "ingredients.food_id")
      .orderBy("ingredients.name");
    } else {
      foods = await knex("foods")
      .whereLike("name", `%${name}%`)
      .orderBy("name");
    }

    const allIngredients = await knex("ingredients");

    const foodWithIngredients = foods.map(food => {
      const foodIngredients = allIngredients.filter(ingredient => ingredient.food_id === food.id);

      return {
        ...food,
        ingredients: foodIngredients
      }
    })

    return res.json(foodWithIngredients)
  }
};

module.exports = FoodsController;