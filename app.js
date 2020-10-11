const express = require("express");
const app = express();
const { PORT = 3000, BASE_PATH } = process.env;
const path = require('path');
const userUserRoutes = require('./routes/users')
const cardsRoutes = require('./routes/cards')
const errorRoutes = require('./routes/error')

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userUserRoutes)
app.use('/', cardsRoutes)
app.use('/', errorRoutes)

app.listen(PORT);