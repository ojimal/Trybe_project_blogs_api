const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return newCategory;
  } catch (error) {
    throw new Error('Failed to create category');
  }
};

module.exports = {
  createCategory,
};
