// Controllers → recebem requisições e chamam os serviços.
const userService = require('../services/user.service');

exports.getAllUsers = (req, res) => {
  const users = userService.listUsers();
  res.json(users);
};

exports.createUser = (req, res) => {
  const newUser = userService.addUser(req.body);
  res.status(201).json(newUser);
};
