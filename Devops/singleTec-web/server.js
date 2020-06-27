// Módulos
const routesEmpresa = require("./routes/empresa");
const routesFuncionario = require("./routes/funcionario");
const autenticacao = require("./modules/autenticacao");
const handlebars = require('express-handlebars');
const routesAdmin = require("./routes/admin");
const conexao = require("./conexao/conexao");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");
const app = express();

//Middlewares;
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + "/public")));
app.use("/empresa", routesEmpresa);
app.use("/funcionario", routesFuncionario);
app.use("/admin", routesAdmin);

// Rota Principal
app.get("/", (req, res) => {
  return res.render('index')
});

// Rota de Autorização
app.get("/autorizathionEmpresa", async (req, res) => {
  let authorization = req.headers.authorization.split(" ")[1]
  resposta = await autenticacao.verficarToken(authorization, '123')
  res.send(resposta)
});

// autorização de funcioario
app.get("/autorizathionFuncionario", async (req, res) => {
  let authorization = req.headers.authorization.split(" ")[1]
  resposta = await autenticacao.verficarToken(authorization, '1234')
  res.send(resposta)
});

// Subindo servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});