const rootRouter = require('express').Router();
const cardsRouter = require('./cards');
const userRouter = require('./users');
const getError = require('../controllers/error');

rootRouter.use('/cards', cardsRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('*', getError);

module.exports = rootRouter;
