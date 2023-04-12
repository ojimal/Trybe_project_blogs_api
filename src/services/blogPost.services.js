const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  } catch (error) {
    throw new Error('Failed finding blog posts');
  }
};
module.exports = {
  findAll,
};
