const { BlogPostService } = require('../services');

const findAll = async (_req, res) => {
  try {
    const posts = await BlogPostService.findAll();
    return res.status(200).json(posts);
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  findAll,
};
