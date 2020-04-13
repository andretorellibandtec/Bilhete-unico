// módulos;
const handlebars = require("express-handlebars");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");
const app = express();

// engine;
app.engine("handlebars", handlebars({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

// arquivos estáticos;
app.use(express.static(path.join(__dirname + "/public")));

// middleware;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(routes);

// rota principal;
app.get("/", (req, res) => {
    res.render("index");
});

// servidor;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});