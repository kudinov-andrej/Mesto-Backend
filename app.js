const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/mestodb');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRouter);

app.listen(3000, () => {
  console.log('Приложение слушает на 3000 порту');
});
