const express = require("express");
const conexao = require("../conexao/conexao");
const router = express.Router();
const logarFuncionario = require("../modules/logarFuncionario")
const autenticacao = require("../modules/autenticacao");
const meusSerialNumber = require("../modules/todosSerialNumber")
const dadosMaquina = require("../modules/dadoMaquina")
const deletarMaquina = require("../modules/deletarMaquina")


router.get("/home", (req, res) => {
    res.render("grafico")
})

router.get("/maquina", (req, res) => {
    res.render("minhasMaquinas")
})

router.post("/logar", async (req, res) => {
    let data = req.body
    let resposta = await logarFuncionario(data)
    if (resposta != false) {
        resposta = resposta[0]
        let token = await autenticacao.tokenFuncionario(resposta)
        return res.send(token)
    } else {
        return res.send(false)
    }
});

router.post("/meusSerialNumber", async (req, res) => {
    let fkEmpresa = req.body.Fk_Empresa;
    let todosSerial = await meusSerialNumber(fkEmpresa);
    res.send(todosSerial)
})

router.post("/dadosMaquina", async (req, res) => {
    let { serial_number } = req.body
    let resposta = await dadosMaquina(serial_number)
    res.send(resposta)
})

router.delete("/maquina", async (req, res) => {
    let { idMaquina } = req.body
    let resposta = await deletarMaquina(idMaquina)
    res.send(resposta)
})

module.exports = router;