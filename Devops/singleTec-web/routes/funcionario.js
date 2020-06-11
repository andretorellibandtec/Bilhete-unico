// const express = require("express");
// const router = express.Router();
// const tableEmpresa = require("../tables/funcionario");



// router.get("/cadastro", (req, res) => {
//     res.render("cadastro-funcionario");
// });

// router.post("/cadastrar", async (req, res) => {
//     try {
//         let data = req.body;
//         await tableEmpresa.create(data);
//         return res.status(200).send("Empresa cadastrada com sucesso!");
//     } catch (error) {
//         res.send(error);
//     }
// })

// module.exports = router;