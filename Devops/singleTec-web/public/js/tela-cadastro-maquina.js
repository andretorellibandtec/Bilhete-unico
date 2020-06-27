modelo = document.getElementById("modelo")
serialNumber = document.getElementById("serialNumber")
cep = document.getElementById("cep");
rua = document.getElementById("rua");
complemento = document.getElementById("complemento");
numero = document.getElementById("numero");
bairro = document.getElementById("bairro");
codEmpresa = null;
form_maquina = document.getElementById("cadastrar-maquina")
back = document.getElementById("back")

// protege a rota de empresa não autenticada
window.onload = function () {
  token = this.localStorage.getItem("tokenEmpresa");
  if (!token) {
    this.location.href = "/"
  } else {
    axios.get("/autorizathionEmpresa", {
      headers: {
        'Authorization': `Basic ${token}`
      }
    }).then(async (result) => {
      let { data } = result
      if (!data) {
        location.href = "/"
      } else {
        let { empresa, idEmpresa } = result.data
        codEmpresa = idEmpresa
      }
    }).catch((erro) => {
      console.log(erro)
    })
  }
}

// busca cep para cadastro de maquina
cep.addEventListener('keyup', async (e) => {
  texto_cep = e.target.value;
  if (texto_cep.length == 8) {
    let endereco = await axios.get(`https://viacep.com.br/ws/${texto_cep}/json/`);
    rua.value = endereco.data.logradouro;
    complemento.value = endereco.data.complemento;
    bairro.value = endereco.data.bairro;
  }
});


form_maquina.addEventListener('submit', async (e) => {
  e.preventDefault();
  let resposta = await axios.post("/empresa/maquina", {
    modelo: modelo.value,
    serial_Number: serialNumber.value,
    cep: cep.value,
    rua: rua.value,
    numero: numero.value,
    bairro: bairro.value,
    complemento: complemento.value,
    Fk_Empresa: codEmpresa
  })
  if (resposta.data) {
    abrirModal("Cadastrado com sucesso!", "#2E8B57")
    setTimeout(() => {
      window.location.reload()
    }, 4000);
  } else {
    abrirModal("Falha ao cadastrar!", "#B22222")
    setTimeout(() => {
      fecharModal();
    }, 4000);
  }
})

back.addEventListener("click", () => {
  location.href = "/empresa/home"
})


function abrirModal(texto, cor) {
  div_modal = document.querySelector(".modal")
  span_texto = document.querySelector(".modal span")
  span_texto.innerHTML = texto;
  div_modal.style.backgroundColor = cor;
  div_modal.style.transition = "all 1s linear"
  div_modal.style.right = "0%"
}

function fecharModal() {
  div_modal = document.querySelector(".modal")
  div_modal.style.right = "-100%"
}