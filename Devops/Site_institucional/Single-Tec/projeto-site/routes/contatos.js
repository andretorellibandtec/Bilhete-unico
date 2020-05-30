var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Contato = require('../models').Contato;

/* Enviar contato */
router.post('/enviar', function (req, res, next) {
	console.log('Enviando uma mensagem');

	Contato.create({
		nome_user: req.body.nome_user,
		email: req.body.email,
		mensagem: req.body.msn
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


module.exports = router;
