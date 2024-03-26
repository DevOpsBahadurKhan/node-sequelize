const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isEmail, hasPassword, hasName } = require('../validators/validators');

router.get('/', userController.listUsers);
router.post('/', [ isEmail, hasPassword, hasName], userController.createUser);

module.exports = router;
