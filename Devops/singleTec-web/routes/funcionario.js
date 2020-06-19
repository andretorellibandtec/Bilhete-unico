const express = require("express");
const router = express.Router();

// router.get("/logar", async (req, res) => {
//   try {
//     let data = req.body;
//     let resposta = await tableFuncionario.findOne({
//       where: {
//         email: email,
//         senha: senha
//       }
//     });
//     let funcionario = resposta == null ? false : resposta.dataValues;
//     if (funcionario) {
//       funcionario.senha = undefined;
//       let token = await autenticacao.tokenFuncionario(funcionario)
//       return res.json({ token });
//     } else {
//       return res.send("Usuario inválido!");
//     }
//   } catch (error) {
//     return res.send(error);
//   }
// });

module.exports = router;