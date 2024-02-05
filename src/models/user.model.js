// Importa a biblioteca mongoose
const mongoose = require("mongoose");

// Define o esquema para o modelo de usuário
const userSchema = new mongoose.Schema({
  // Campo para o primeiro nome do usuário, deve ser uma string e é obrigatório
  firstName: {
    type: String,
    required: true,
  },
  // Campo para o sobrenome do usuário, deve ser uma string e é obrigatório
  lastName: {
    type: String,
    required: true,
  },
  // Campo para o e-mail do usuário, deve ser uma string e é obrigatório
  email: {
    type: String,
    required: true,
  },
  // Campo para a senha do usuário, deve ser uma string, é obrigatório e deve ter no mínimo 7 caracteres
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
});

// Cria um modelo (User) usando o esquema definido anteriormente
const userModel = mongoose.model("User", userSchema);

// Exporta o modelo para ser utilizado em outras partes da aplicação
module.exports = userModel;
