const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {hasTitle,hasDescription, hasId} = require('../validators/validators')

router.get('/', postController.listPosts);
router.post('/', [hasTitle,hasDescription], postController.createPost);
router.post('/:id', postController.findOne);
router.delete('/:id', postController.deleteOne);
router.patch('/:id', postController.update);

module.exports = router;

