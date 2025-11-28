// Services → contêm a lógica de negócio.
let users = [];

exports.listUsers = () => {
  return users;
};

exports.addUser = (userData) => {
  const newUser = { id: users.length + 1, ...userData };
  users.push(newUser);
  return newUser;
};
