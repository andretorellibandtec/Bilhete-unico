cep = document.getElementById("cep");
rua = document.getElementById("rua");
complemento = document.getElementById("complemento");
bairro = document.getElementById("bairro");
codEmpresa = null;

// protege a rota de empresa não autenticada
window.onload = function () {
  token = this.localStorage.getItem("token");
  if (!token) {
    this.location.href = "/"
  } else {
    let token = this.localStorage.getItem("token")
    axios.get("/autorizathion", {
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
cep.addEventListener('keyup',async (e)=>{
  cep = e.target.value;
  if(cep.length == 8){
    let endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    rua.value = endereco.data.logradouro;
    complemento.value = endereco.data.complemento;
    bairro.value = endereco.data.bairro;
  }
});