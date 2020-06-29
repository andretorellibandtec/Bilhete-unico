let key = location.search.split("key=")[1]
key == undefined ? location.href = "/funcionario/home" : key
buscaMaquinaSerial = document.getElementById("buscaMaquinaSerial")

window.onload = function () {
  this.buscarMaquinas()
}
async function buscarMaquinas() {
  let resposta = await axios.post("/empresa/minhasMaquinas", {
    fk_empresa: key
  })
  document.getElementById("titulo").innerHTML = resposta.data[0].empresa
  resposta.data.forEach(e => {
    serialNumber = `Serial Number: ${e.serial_Number}`
    idMaquina = `ID máquina: ${e.idMaquina}`
    endereco = `Endereço: ${e.rua} ${e.numero} ${e.bairro}`
    addMaquina(serialNumber, idMaquina, endereco)
  });
}

function addMaquina(serial, id, end) {
  containerMaquina = document.createElement("div")
  containerMaquina.classList.add("container-maquina")
  imgMaquina = document.createElement("img")
  imgMaquina.src = "/img/tema-totem.png"
  informacoesMaquina = document.createElement("div")
  informacoesMaquina.classList.add("informacoes-maquina")
  serialNumber = document.createElement("label")
  idMaquina = document.createElement("label")
  endereco = document.createElement("label")
  close = document.createElement("button")
  close.onclick = function (e) {
    idMaquina = e.path[1].children[1].innerHTML.split(":")[1].trim()
    deletarMaquina(idMaquina)
  }
  serialNumber.innerHTML = serial
  idMaquina.innerHTML = id
  endereco.innerHTML = end
  close.innerHTML = "x"
  containerMaquina.appendChild(imgMaquina)
  containerMaquina.appendChild(informacoesMaquina)
  informacoesMaquina.appendChild(serialNumber)
  informacoesMaquina.appendChild(idMaquina)
  informacoesMaquina.appendChild(endereco)
  informacoesMaquina.appendChild(close)
  document.getElementsByTagName("main")[0].appendChild(containerMaquina)
}


buscaMaquinaSerial.addEventListener("keyup", async (e) => {
  let search = e.path[0].value
  let resposta = await axios.get(`/funcionario/buscarMquina?search=${search}`, {
    headers: {
      key
    }
  })
  let maquinas = resposta.data
  let maquinasVisiveis = document.querySelectorAll(".container-maquina")
  for (i = 0; i < maquinasVisiveis.length; i++) {
    maquinasVisiveis[i].remove()
  }
  maquinas.forEach(e => {
    serialNumber = `Serial Number: ${e.serial_Number}`
    idMaquina = `ID máquina: ${e.idMaquina}`
    endereco = `Endereço: ${e.rua} ${e.numero} ${e.bairro}`
    addMaquina(serialNumber, idMaquina, endereco)
  });
})

// excluir máquina
// async function deletarMaquina(idMaquina) {
//   let resposta = await axios.delete("/funcionario/maquina", {
//     idMaquina
//   })
//   if (!resposta) {
//     alert("Falha ao excluir á máquina!")
//   } else {
//     alert("Máquina excluida!")
//   }
// }
