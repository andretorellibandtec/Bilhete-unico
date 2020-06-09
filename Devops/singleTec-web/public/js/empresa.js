let form = document.getElementById("form-empresa");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let input_empresa = document.getElementById("empresa");
  let input_cnpj = document.getElementById("cnpj");
  let input_telefone = document.getElementById("telefone");
  let input_email = document.getElementById("email");
  let input_senha = document.getElementById("senha");
  let input_cep = document.getElementById("cep");
  let input_numero = document.getElementById("numero");

  let resposta = await axios.post("/empresa/cadastrar", {
    empresa: input_empresa.value,
    cnpj: input_cnpj.value,
    telefone: input_telefone.value,
    email: input_email.value,
    senha: input_senha.value,
    cep: input_cep.value,
    numero: input_numero.value,
  });

  if (resposta.status == 200) {
    alert("Cadastrado com sucesso!");
    limparCampos(input_empresa, input_cnpj, input_telefone, input_email, input_senha, input_cep, input_numero);
  } else {
    alert("Falha ao cadastrar!");
  }

});

function limparCampos(...inputs) {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}


