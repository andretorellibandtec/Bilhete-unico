const express = require("express");
const router = express.Router();
const logarFuncionario = require("../modules/logarFuncionario")

router.get("/logarfuncionario", (req, res) => {
    res.render("logar-funcionario");
});


router.post("/logarfuncionario", async (req, res) => {
    let data = req.body
    let resposta = await logarFuncionario(data)
    return res.send(resposta)
});

module.exports = router;