const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const rootRoutes = require('./routes/root');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', rootRoutes);

app.listen(PORT);
