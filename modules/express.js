// Importa o módulo express
const express = require("express");

// Importa o modelo de usuário definido anteriormente
const UserModel = require("../src/models/user.model");

// Cria uma instância do express
const app = express();

// Define o uso do middleware para interpretar o corpo da requisição como JSON
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "src/views");


//midweres
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Request Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  next();
});
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({})
  res.render("index", {users});
});

// Rota GET para a página inicial
app.get("/home", (req, res) => {
  // Define o tipo de conteúdo da resposta como HTML
  res.contentType("text/html");
  // Envia uma resposta com um cabeçalho H1
  res.status(200).send("<h1>Ola mundo</h1>");
});

// Rota GET para obter lista de usuários
app.get("/users", async (req, res) => {
  try {
    // Busca todos os usuários no banco de dados
    const users = await UserModel.find({});
    // Retorna os usuários como resposta no formato JSON
    res.status(200).json(users);
  } catch (error) {
    // Em caso de erro, pode-se adicionar um tratamento ou simplesmente não fazer nada
    // Poderia ser adicionado um retorno de erro mais detalhado
    res.status(500).send("Erro interno no servidor");
  }
});

// Rota POST para criar um novo usuário
app.post("/users", async (req, res) => {
  try {
    // Cria um novo usuário usando o modelo e os dados do corpo da requisição
    const user = await UserModel.create(req.body);
    // Envia o novo usuário como resposta no formato JSON
    res.status(201).json(user);
  } catch (error) {
    // Em caso de erro, retorna uma resposta de erro
    res.status(500).send("Erro interno no servidor");
  }
});

// Rota GET para obter um usuário por ID
app.get("/users/:id", async (req, res) => {
  try {
    // Obtém o ID da requisição
    const id = req.params.id;
    // Busca um usuário no banco de dados pelo ID
    const user = await UserModel.findById(id);
    // Retorna o usuário encontrado como resposta no formato JSON
    res.status(200).json(user);
  } catch (error) {
    // Em caso de erro, retorna uma resposta de erro
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findOneAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Porta em que o servidor irá escutar
const port = 8080;

// Inicia o servidor na porta especificada
app.listen(port, () => console.log(`Rodando com o express na porta ${port}`));
