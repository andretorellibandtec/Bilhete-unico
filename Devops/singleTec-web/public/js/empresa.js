let form = document.getElementById("form-empresa");
let input_empresa = document.getElementById("empresa");
let input_cnpj = document.getElementById("cnpj");
let input_telefone = document.getElementById("telefone");
let input_email = document.getElementById("email");
let input_senha = document.getElementById("senha");
let input_cep = document.getElementById("cep");
let input_numero = document.getElementById("numero");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let resposta = await axios.post("/empresa/cadastrar", {
    empresa: input_empresa.value,
    cnpj: input_cnpj.value,
    telefone: input_telefone.value,
    email: input_email.value,
    senha: input_senha.value,
    cep: input_cep.value,
    numero: input_numero.value,
  });
  if (resposta.data == false) {
    abrirModal("Falha ao cadastrar", "#B22222")
    fecharModal()
  } else {
    abrirModal("Cadastrado com sucesso!", "#2E8B57")
    setTimeout(() => {
      location.href = "/"
    }, 3000);
  }
});

function limparCampos(...inputs) {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function abrirModal(texto, cor) {
  div_modal = document.querySelector(".modal")
  span_texto = document.querySelector(".modal span")
  span_texto.innerHTML = texto;
  div_modal.style.backgroundColor = cor;
  div_modal.style.transition = "all 1s linear"
  div_modal.style.right = "0%"
}

function fecharModal() {
  setTimeout(() => {
    div_modal = document.querySelector(".modal")
    div_modal.style.right = "-100%"
  }, 3000);
}
