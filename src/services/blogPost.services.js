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
    throw new Error('Failed finding posts');
  }
};

const findPostById = async (id) => {
  try {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return post;
  } catch (error) {
    throw new Error('Failed finding posts by id');
  }
};

module.exports = {
  findAll,
  findPostById,
};
