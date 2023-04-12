const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return newCategory;
  } catch (error) {
    throw new Error('Failed to create category');
  }
};

const findAllCategories = async () => {
  try {
    const categories = await Category.findAll();
    return categories;
  } catch (error) {
    throw new Error('Failed to find all categories');
  }
};

module.exports = {
  createCategory,
  findAllCategories,
};
