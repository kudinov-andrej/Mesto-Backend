const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [];

let id = 0;

app.get('/', (req, res) => {
  res.send(users);
});

app.post('/', (req, res) => {
  id += 1;
  const newUser = {
    ...req.body,
    id,
  };
  users.push(newUser);

  res.send(newUser);
});

app.listen(3000, () => {
  console.log('Приложение слушает на 3000 порту');
});