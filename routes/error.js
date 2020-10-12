const router = require('express').Router();
const getError = require('../controllers/error');

router.get('*', getError);

module.exports = router;
