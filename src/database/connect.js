const mongoose = require("mongoose"); //importando o mongoose

const connectToDatabase = async () => {
  //funcao com trycatch e asyn cawait
  try {
    //tranformando a funçao em assincrona
    await mongoose.connect(
      //retornando
      `mongodb+srv://${process.env.nome_mongo}:${process.env.senha_mongo}@banconode.9yailgl.mongodb.net/?retryWrites=true&w=majority` //dados la do mongodb
    ); //essas chaves sao senha e nome que eu deixei salvos no arquivo .env
    console.log("Conexão ao banco de dados realizada com sucesso"); // caso a requisiçao esrteja correta
  } catch (error) {
    console.error("Erro ao se conectar com o banco de dados:", error.message); // erro caso nao de certo a requisiçao
  }
};

module.exports = connectToDatabase;
