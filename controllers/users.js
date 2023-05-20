const usersModel = require('../models/user').default;

const getUserById = (req, res) => {
  usersModel.findById(req.params.user_id)
    .orFail(() => {
      throw new Error('NotFound');
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(500).send({
        massege: 'Ошибка при обработке запроса',
        error: error.massege,
        stack: error.stack,
      });
    });
};

const crateUser = (req, res) => {
  usersModel.create(req.body).then((user) => {
    res.status(200).send(user);
  }).catch((error) => {
    res.status(500).send({
      massege: 'Ошибка при обработке запроса',
      error: error.massege,
      stack: error.stack,
    });
  });
};

const getUsers = (req, res) => {
  usersModel.find({}).then((users) => {
    res.send(users);
  }).catch((error) => {
    res.status(500).send({
      massege: 'Ошибка при обработке запроса',
      error: error.massege,
      stack: error.stack,
    });
  });
};

module.exports = {
  getUserById,
  getUsers,
  crateUser,
};
