titulo = document.getElementById("titulo")
table = document.getElementsByTagName("table")[0];

window.onload = function(){
  token = this.localStorage.getItem("token");
  if(!token){
    this.location.href = "/"
  }else{
    let token = this.localStorage.getItem("token")
    axios.get("/autorizathion", {
      headers: {
        'Authorization': `Basic ${token}`
      }
    }).then(async (result)=>{
      let {data} = result
      if(!data){
        location.href = "/"
      }else{
        let {empresa,idEmpresa} = result.data
        titulo.innerHTML = empresa
        let resp = await buscarFuncionarios(idEmpresa)
        this.carregarFuncionarios(resp.data)
      }
    }).catch((erro)=>{
      console.log(erro)
    })
  }
}

async function buscarFuncionarios(idEmpresa){
  resp = await axios.get(`funcionarios/${idEmpresa}`)
  return resp
}

function carregarFuncionarios(funcionarios){
  funcionarios.forEach(e => {
    let tr = document.createElement("tr")
    let idFuncionario = document.createElement("td")
    let nome = document.createElement("td")
    let cargo = document.createElement("td")
    let funcao = document.createElement("td")
    let email = document.createElement("td")
    let apagar = document.createElement("td")
    let button = document.createElement("button")
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
    button.onclick = function(e){
      tr = e.path[2]
      let idFuncionario = e.path[2].children[0].innerHTML
      apagarFuncionario(idFuncionario, tr)
    }
  });
}

function apagarFuncionario(idFuncionario,tr){
  axios.delete(`funcionario/${idFuncionario}`)
  window.location.reload();
}