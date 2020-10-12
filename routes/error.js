const router = require('express').Router();
const getError = require('../controllers/error');

router.use('*', getError);

module.exports = router;
