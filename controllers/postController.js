const Post = require('../models/posts');
const validationHandler = require('../validators/validationHnadler');

exports.listPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll(); // Use Sequelize's findAll method to get all users
    res.send(posts);
  } catch (err) {
    next(err)
  }
};

exports.createPost = async (req, res, next) => {
  try {
    validationHandler(req);
    const post = await Post.create(req.body);
    res.send(post);
  } catch (err) {
    next(err)
  }
};

exports.findOne = async (req, res, next) => {
  try {
    validationHandler(req);
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    res.send(post);

  } catch (error) {
    next({ error: 'Error retrieving post' });
  }
}

exports.deleteOne = async (req, res, next) => {
  alidationHandler(req);
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId);
    await post.destroy();
    res.send({ "message": "Post is Deleted" });
  } catch (err) {
    next({ err, postId })
  }
};

exports.update = async (req, res, next) => {
  const postId = req.params.id;
  const updatedData = req.body; // Assuming the request body contains the updated data.

  try {

    const post = await Post.findByPk(postId);
    await post.update(updatedData);
    res.send(post);

  } catch (error) {
    next({ error: 'Error updating user' });
  }
};

