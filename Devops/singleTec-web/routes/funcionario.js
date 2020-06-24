const express = require("express");
const conexao = require("../conexao/conexao");
const router = express.Router();
const logarFuncionario = require("../modules/logarFuncionario")
const autenticacao = require("../modules/autenticacao");

router.post("/logar", async (req, res) => {
    let data = req.body
    let resposta = await logarFuncionario(data)
    if(resposta != false){
        let token = await autenticacao.tokenFuncionario(data)
        return res.send(token)
    }else{
        return res.send(false)
    }
});

module.exports = router;