const fs = require('fs');
const path = require('path');
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    const filePath = path.join(__dirname, '..', '..', '..', 'meal.db.json');

    const jsonData = fs.readFileSync(filePath);
    const meals = JSON.parse(jsonData);

    await queryInterface.bulkInsert('meals_recipes', meals, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('meals_recipes', {});
  },
}