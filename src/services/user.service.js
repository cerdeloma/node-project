// Services → contêm a lógica de negócio.

let users = [];

exports.register = async (email, password, name) => {
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    throw new Error('Usuário já existe com esse e-mail');
  }

  // hash da senha (criptografa)
  const bcrypt = require("bcryptjs");
  const hashedPassword = await bcrypt.hash(password, 10);

  // cria novo usuário
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
    createdAt: new Date()
  };

  users.push(newUser);

  // retorna usuário sem a senha 
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
}

exports.login = async (email, password) => {
  const bcrypt = require('bcryptjs');
  const jwt = require('jsonwebtoken');

  // busca user por email
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error('Email ou senha inválidos');
  }

  // compara a senha digitada com a senha criptografada
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Email ou senha inválidos');
  }

  // gera o JWT token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name
    },
    process.env.JWT_SECRET || 'secret-key',
    {
      expiresIn: '24h'
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
};

exports.getUserById = (id) => {
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    throw new Error('Usuário não encontrado');
  }
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
