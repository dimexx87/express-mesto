const router = require('express').Router();
const getError = require('../controllers/error');

router.get('*', getError);
router.post('*', getError);
router.put('*', getError);
router.delete('*', getError);

module.exports = router;
