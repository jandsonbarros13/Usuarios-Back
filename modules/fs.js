// Importar o módulo 'fs' (File System) para operações de sistema de arquivos
const fs = require("fs");
// Importar o módulo 'path' para manipulação de caminhos de arquivos
const path = require("path");

// 1. Criar uma pasta chamada 'test'
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.error("Erro ao criar a pasta:", error);
  }
  console.log("Pasta criada com sucesso");
});

// 2. Criar um arquivo chamado 'test.txt' dentro da pasta 'test' com o conteúdo 'ola mundo'
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "ola mundo",
  (error) => {
    if (error) {
      return console.error("Erro na criação do arquivo:", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);

// 3. Adicionar a string 'Ola para todos' ao final do arquivo 'test.txt'
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Ola para todos",
  (error) => {
    if (error) {
      return console.error("Erro ao adicionar ao arquivo:", error);
    }
    console.log("Arquivo modificado com sucesso");
  }
);

// 4. Ler o conteúdo do arquivo 'test.txt' na codificação 'utf8'
fs.readFile(
  path.join(__dirname, "/teste", "test.txt"), // Aqui parece haver um erro de digitação em '/teste'
  "utf8",
  (error, data) => {
    if (error) {
      return console.error("Erro ao ler o arquivo:", error);
    }
    console.log("Conteúdo do arquivo:", data);
  }
);
