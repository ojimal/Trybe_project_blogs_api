const { BlogPostService } = require('../services');

const findAll = async (_req, res) => {
  try {
    const posts = await BlogPostService.findAll();
    return res.status(200).json(posts);
  } catch (err) {
    return err.message;
  }
};

const findPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPostService.findPostById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  findAll,
  findPostById,
};
