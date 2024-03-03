"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _03Drinks_Recipes_model_1 = require("../database/models/03Drinks-Recipes.model");
const _01Drinks_Categories_model_1 = require("../database/models/01Drinks-Categories.model");
const _01Drinks_Categories_model_2 = require("../database/models/01Drinks-Categories.model");
class DrinksModel {
    constructor() {
        this.Drinkmodel = _03Drinks_Recipes_model_1.default;
        this.CategoryModel = _01Drinks_Categories_model_1.default;
    }
    async findAll() {
        const recipes = await this.Drinkmodel.findAll({
            include: [{
                    model: _01Drinks_Categories_model_2.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
    }
    async getDrinkById(id) {
        const recipe = await this.Drinkmodel.findByPk(id);
        return recipe;
    }
    async getFilteredDrinks(q) {
        const dbResponse = await this.Drinkmodel.findAll({
            where: {
                strDrink: {
                    [sequelize_1.Op.like]: `%${q}%`
                }
            }
        });
        if (!dbResponse)
            return null;
        return dbResponse;
    }
    async getDrinkByCategory(q) {
        const recipes = await this.Drinkmodel.findAll({
            include: [{
                    model: _01Drinks_Categories_model_2.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        }).filter((recipe) => recipe.strCategory === q);
        return newRecipes;
    }
    async getCategories() {
        const categories = await this.CategoryModel.findAll();
        return categories;
    }
    async getAllIngredients() {
        const recipes = await this.findAll();
        const uniqueIngredients = [];
        recipes.forEach((recipe) => {
            for (let i = 1; i <= 20; i += 1) {
                const ingredientKey = `strIngredient${i}`;
                const ingredient = recipe[ingredientKey];
                if (ingredient) {
                    uniqueIngredients.push(ingredient);
                }
            }
        });
        const removedDup = new Set(uniqueIngredients);
        const newIngredients = Array.from(removedDup);
        return newIngredients;
    }
    async getByIngredients(q) {
        const recipes = await this.findAll();
        const recipesFiltred = recipes.filter((recipe) => {
            const values = Object.values(recipe);
            const valuesLower = values.map((value) => {
                return typeof value === 'string' ? value.toLowerCase() : value;
            });
            if (valuesLower.includes(q.toLowerCase())) {
                return true;
            }
            return false;
        });
        return recipesFiltred;
    }
}
exports.default = DrinksModel;
//# sourceMappingURL=Drinks.model.js.map