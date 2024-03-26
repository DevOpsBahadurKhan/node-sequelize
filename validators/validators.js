const { body } = require('express-validator');

exports.hasTitle = body('title').isLength({ min: 5 })
    .withMessage("title is required. Min length 5 characters");

exports.hasDescription = body('description').isLength({ min: 10 })
    .withMessage("Description is required. Min length 5 characters");

exports.hasName = body('username').isLength({ min: 10 })
    .withMessage("Name is required. Min length 5 characters");

exports.isEmail = body('email')
    .isEmail().withMessage("Email field must contain correct email");

exports.hasPassword = body('password')
    .exists().withMessage("Password can not be empty");

exports.hasId = body('id').notEmpty()
    .withMessage("ID field is required");