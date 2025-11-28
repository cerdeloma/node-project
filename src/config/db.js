// Configuração com o banco de dados MongoDB
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Banco de dados conectado com sucesso 🚀');
  } catch (err) {
    console.error('Erro ao conectar no banco', err);
    process.exit(1);
  }
};

module.exports = connectDB;
