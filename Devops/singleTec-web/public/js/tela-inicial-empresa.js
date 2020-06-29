titulo = document.getElementById("titulo")
table = document.getElementsByTagName("table")[0]
containerChat = document.getElementById("container-chatid")
btn_chatid = document.getElementById("btn_chatid")
closeChat = document.getElementById("closeChat")
meuChatId = document.getElementById("meuChatId")
btn_cadastro_Chat = document.getElementById("btn_cadastro_Chat")
codEmpresa = null

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
        titulo.innerHTML = empresa
        let resp = await buscarFuncionarios(idEmpresa)
        this.carregarFuncionarios(resp.data)
      }
    }).catch((erro) => {
      console.log(erro)
    })
  }
}

async function buscarFuncionarios(idEmpresa) {
  resp = await axios.get(`funcionarios/${idEmpresa}`)
  return resp
}

function carregarFuncionarios(funcionarios) {
  funcionarios.forEach((e, index) => {
    let tr = document.createElement("tr")
    let idFuncionario = document.createElement("td")
    let nome = document.createElement("td")
    let cargo = document.createElement("td")
    let funcao = document.createElement("td")
    let email = document.createElement("td")
    let apagar = document.createElement("td")
    let button = document.createElement("button")
    button.classList.add("btn_excluir_funcionario")
    button.innerHTML = "x"
    idFuncionario.innerHTML = e.idFuncionario
    nome.innerHTML = e.nome
    cargo.innerHTML = e.cargo
    funcao.innerHTML = e.tipo
    email.innerHTML = e.email
    apagar.appendChild(button)
    tr.appendChild(idFuncionario)
    tr.appendChild(nome)
    tr.appendChild(cargo)
    tr.appendChild(funcao)
    tr.appendChild(email)
    tr.appendChild(apagar)
    table.appendChild(tr)
    button.onclick = function (e) {
      tr = e.path[2]
      let idFuncionario = e.path[2].children[0].innerHTML
      apagarFuncionario(idFuncionario, tr)
    }
  });
}

function apagarFuncionario(idFuncionario, tr) {
  axios.delete(`funcionario/${idFuncionario}`)
  tr.remove()
}

//botão de sair
document.getElementById("logout").addEventListener('click', (e) => {
  e.preventDefault()
  localStorage.removeItem("tokenEmpresa")
  location.href = "/"
})

//botão de cadastrar funcionario
document.getElementById("cadfuncionario").addEventListener('click', (e) => {
  e.preventDefault()
  let tela_funcionario = document.getElementsByClassName("container-cadastrar-funcionario")[0]
  tela_funcionario.style.display = "flex"
})

document.getElementById("close-modal-funcionario").addEventListener('click', () => {
  let tela_funcionario = document.getElementsByClassName("container-cadastrar-funcionario")[0]
  tela_funcionario.style.display = "none"
})

document.getElementById("form-cadastro-funcionario").addEventListener("submit", async (e) => {
  e.preventDefault();
  funcionario_nome = document.getElementById("nome");
  funcionario_cargo = document.getElementById("cargo");
  funcionario_tipo = document.getElementById("tipo");
  funcionario_email = document.getElementById("email");
  funcionario_senha = document.getElementById("senha");
  funcionario_contato = document.getElementById("contato");

  let resposta = await axios.post("/empresa/funcionario", {
    nome: funcionario_nome.value,
    cargo: funcionario_cargo.value,
    tipo: funcionario_tipo.value,
    email: funcionario_email.value,
    senha: funcionario_senha.value,
    contato: funcionario_contato.value,
    fk_empresa: codEmpresa
  })
  if (resposta.data == "Funcionario cadastrado com sucesso!") {
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

// busca aproximada do funcionario
document.getElementById("pesquisar").addEventListener("keyup", async (e) => {
  let texto = e.target.value
  let resposta = await axios.get(`/empresa/funcionarios?search=${texto}`, {
    headers: {
      'key': codEmpresa
    }
  })
  limparTabela();
  carregarFuncionarios(resposta.data)
})

function limparTabela() {
  let linhas = document.querySelectorAll("tr")
  for (i = 0; i < linhas.length; i++) {
    if (i > 0) {
      linhas[i].remove()
    }
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

btn_chatid.onclick = function (e) {
  e.preventDefault()
  containerChat.style.display = "flex"
}

closeChat.onclick = function () {
  containerChat.style.display = "none"
}


btn_cadastro_Chat.onclick = async function () {
  let mychat = meuChatId.value
  if (mychat.length > 0) {
    let res = await axios.put("/empresa/chatId", {
      fk_Empresa: codEmpresa,
      codigoChat: mychat
    })

    if (res.data) {
      abrirModal("Cadastrado com sucesso!", "#2E8B57")
      fecharModal()
      meuChatId.value = ""
    } else {
      abrirModal("Falha ao cadastrar!", "#B22222")
      fecharModal()
    }
  }
}