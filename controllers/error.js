const { NOTFOUND_ERROR_CODE } = require('../utils/constants');

const getError = (req, res) => res.status(NOTFOUND_ERROR_CODE).send({ message: 'Запрашиваемый ресурс не найден' });

module.exports = getError;
