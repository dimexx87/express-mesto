const User = require('../models/user');
const {
  OK_CODE,
  CREATE_CODE,
  INPUT_ERROR_CODE,
  NOTFOUND_ERROR_CODE,
  ERROR_CODE,
  myId,
} = require('../utils/constants');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(OK_CODE).send(users);
  } catch (err) {
    res.status(ERROR_CODE).send({ message: `На сервере произошла ошибка ${err}` });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(NOTFOUND_ERROR_CODE).send({ message: 'Ошибка. Нет пользователя с таким id' });
    }
    res.status(OK_CODE).send(user);
  } catch (err) {
    res.status(ERROR_CODE).send({ message: `На сервере произошла ошибка ${err}` });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const user = await User.create({ name, about, avatar });
    res.status(CREATE_CODE).send({ data: user });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(INPUT_ERROR_CODE).send({ message: `Ошибка. Переданы некорректные данные ${err}` });
    }
    res.status(ERROR_CODE).send({ message: `На сервере произошла ошибка ${err}` });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, about } = req.body;
    const user = await User.findByIdAndUpdate(myId, { name, about }, {
      new: true,
      runValidators: true,
    });
    res.status(CREATE_CODE).send({ data: user });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(INPUT_ERROR_CODE).send({ message: `Ошибка. Переданы некорректные данные ${err}` });
    }
    res.status(ERROR_CODE).send({ message: `На сервере произошла ошибка ${err}` });
  }
};

const updateAvatar = async (req, res) => {
  try {
    const { avatar } = req.body;
    const user = await User.findByIdAndUpdate(myId, { avatar }, {
      new: true,
      runValidators: true,
    });
    res.status(CREATE_CODE).send({ data: user });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(INPUT_ERROR_CODE).send({ message: `Ошибка. Переданы некорректные данные ${err}` });
    }
    res.status(ERROR_CODE).send({ message: `На сервере произошла ошибка ${err}` });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  updateAvatar,
};
