const users = [];

let id = 0;

const getUserById = (req, res) => {
  const user = users.find((use) => use.id === Number(req.params.user_id));
  if (!user) {
    res.status(404).send({ massege: 'Пользователь не найден' });
    return;
  }
  res.send(user);
};

const crateUser = (req, res) => {
  id += 1;
  const newUser = {
    ...req.body,
    id,
  };
  users.push(newUser);

  res.send(newUser);
};

const getUsers = (req, res) => {
  res.send(users);
};

module.exports = {
  getUserById,
  getUsers,
  crateUser,
};