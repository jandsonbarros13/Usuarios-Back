const http = require("http");

// Porta
const port = 8080;

// Cria o servidor
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-type": "text/html" }); // Correção: Content-type deve ser 'text/html'
    res.end("<h1>home page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        nome: "Pedro Barros",
        email: "Pedrobarros@gmail.com",
      },
      {
        nome: "Jandson Barros",
        email: "jandson2014@gmail.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
