const Card = require('../models/card');
const {
  OK_CODE,
  CREATE_CODE,
  INPUT_ERROR_CODE,
  NOTFOUND_ERROR_CODE,
  ERROR_CODE,
} = require('../utils/constants');

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(OK_CODE).send(cards);
  } catch (err) {
    res.status(ERROR_CODE).send({ message: `На сервере произошла ошибка!gig ${err}` });
  }
};

const createCard = async (req, res) => {
  try {
    const { name, link } = req.body;
    const { _id } = req.user;
    const card = await Card.create({ name, link, owner: _id });
    res.status(CREATE_CODE).send({ card });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(INPUT_ERROR_CODE).send({ message: `Ошибка. Переданы некорректные данные ${err}` });
    }
    res.status(ERROR_CODE).send({ message: `На сервере произошла ошибка ${err}` });
  }
};

const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findOneAndRemove({ _id: cardId });
    if (!card) {
      res.status(NOTFOUND_ERROR_CODE).send({ message: 'Ошибка. Нет карточки с таким id' });
    }
    res.status(OK_CODE).send(card);
  } catch (err) {
    res.status(ERROR_CODE).send({ message: `На сервере произошла ошибка ${err}` });
  }
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
