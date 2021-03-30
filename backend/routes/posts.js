const postsRouter = require('express').Router();
const postController = require('../controllers/posts');

postsRouter.get('/', postController.getPosts);

module.exports = postsRouter;