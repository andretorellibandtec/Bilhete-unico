const express = require("express");
const router = express.Router();
const sendEmail = require("../models/sendEmail");


router.post("/email", (req, res) => {

    var {
        remetente
    } = req.body;
    var {
        titulo
    } = req.body;
    var {
        mensagem
    } = req.body;

    sendEmail(remetente, titulo, mensagem).then(() => {
        res.json({
            statusCode: 200
        });
    }).catch((erro) => {
        res.json(erro);
    })

});

module.exports = router;