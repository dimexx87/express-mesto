const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rootRoutes = require('./routes/root');
const { myId } = require('./utils/constants');

const mongoDbUrl = 'mongodb://localhost:27017/mestodb';
const mongoConnectOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(mongoDbUrl, mongoConnectOptions);

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: myId,
  };
  next();
});

app.use('/', rootRoutes);

app.listen(PORT);
