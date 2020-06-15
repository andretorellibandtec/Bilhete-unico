const jwt = require("jsonwebtoken");

const tokenEmpresa = (payload) => {
  return new Promise((resolve, reject) => {
    let token = jwt.sign(payload, '123', { expiresIn: '1h' });
    resolve(token)
  });
}

const tokenFuncionario = (payload) => {
  return new Promise((resolve, reject) => {
    let token = jwt.sign(payload, '1234', { expiresIn: '1h' });
    resolve(token)
  });
}

const verficarToken = (token, chave) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, chave, function (err, decoded) {
      if (err) {
        resolve(false)
      } else {
        resolve(decoded);
      }
    });
  });
}

module.exports = {
  tokenEmpresa,
  tokenFuncionario,
  verficarToken
}