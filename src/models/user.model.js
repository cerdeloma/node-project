// Models → representam os dados (ex.: banco de dados).
// Se usar MongoDB com Mongoose:
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
