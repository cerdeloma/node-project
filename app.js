const express = require('express');
const userRoutes = require('./src/routes/user.routes');
const errorHandler = require('./src/middlewares/error.middleware');

const app = express();
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API 🚀');
});

app.use('/users', userRoutes);

// Middleware para rotas não encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({
    message: "Ops! Essa rota não existe. Verifique o endereço 😉",
  });
});

// Middleware de erro global (500)
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
