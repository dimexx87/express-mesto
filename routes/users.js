const userRouter = require('express').Router();
const { getUser, getUsers } = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);

module.exports = userRouter;
