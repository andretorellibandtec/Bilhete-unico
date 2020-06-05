const express = require("express");
const router = express.Router();
const sendEmail = require("../modules/sendEmail");

router.post("/email", async (req, res) => {
  try {
    let { remetente, titulo, mensagem } = req.body;
    let resposta = await sendEmail(remetente, titulo, mensagem);
    res.status(200).send("E-mail enviado com sucesso!");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;