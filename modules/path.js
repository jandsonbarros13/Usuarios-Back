const path = require("path");

// apenas  o nome
console.log(path.basename(__filename));
// o diretorio
console.log(path.dirname(__filename));
// extenssao do arquivo
console.log(path.extname(__filename));
// criar objeto
console.log(path.parse(__filename))
//Juntar caminhos dos arquivos
console.log(path.join(__dirname, "teste", "teste.html"))
