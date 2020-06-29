var linha = document.getElementById('linha').getContext('2d');
var donut = document.getElementById('donut').getContext('2d');
fkEmpresa = null;
idFuncionario = null;
nomeFuncionario = null;
graficoLinha = null;
graficoDonut = null;

window.onload = function () {
  token = this.localStorage.getItem("tokenFuncionario");
  if (!token) {
    this.location.href = "/"
  } else {
    axios.get("/autorizathionFuncionario", {
      headers: {
        'Authorization': `Basic ${token}`
      }
    }).then(async (result) => {
      let { data } = result
      if (!data) {
        location.href = "/"
      } else {
        fkEmpresa = data.Fk_Empresa
        idFuncionario = data.idFuncionario
        nomeFuncionario = data.nome
        document.getElementById("titulo").innerHTML = nomeFuncionario
        this.carregarGraficoDestaque();
        this.carregarGraficoDonut();
        this.atualizarGraficoEmTempos()
        this.todosSerial()
      }
    }).catch((erro) => {
      console.log(erro)
    })
  }
}

async function todosSerial() {
  lista = document.getElementById("lista-serial-number")
  let resposta = await axios.post("/funcionario/meusSerialNumber", {
    Fk_Empresa: fkEmpresa
  })
  resposta.data.forEach((e, i) => {
    li = document.createElement("li")
    li.innerHTML = e.serial_Number
    i == 0 ? buscarDados(e.serial_Number) : null
    li.onclick = function (e) {
      serialNumber = e.path[0].innerHTML
      buscarDados(serialNumber)
    }
    lista.appendChild(li)
  });
}



function carregarGraficoDestaque() {
  graficoLinha = new Chart(linha, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Maior pico (CPU)',
        data: [],
        borderWidth: 1,
        backgroundColor: "transparent",
        borderColor: "#DAA520"
      },
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      maintainAspectRatio: false,
    }
  });
}

function carregarGraficoDonut() {
  graficoDonut = new Chart(donut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [0, 0, 0],
        backgroundColor: ['#DAA520', '#4B0082', '#DC143C']
      }],
      labels: ['CPU', 'MEMÓRIA', 'DISCO']
    }
  });
}


// deslogar funcionario
document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault()
  localStorage.removeItem("tokenFuncionario")
  location.href = "/"
})

function atualizarGrafico(chart, cpu, memoria, disco) {
  chart.config.data.datasets[0].data[0] = cpu
  chart.config.data.datasets[0].data[1] = memoria
  chart.config.data.datasets[0].data[2] = disco
  chart.update();
}

async function buscarDados(serial_number) {
  let resposta = await axios.post("/funcionario/dadosMaquina", {
    serial_number
  })
  if (resposta.data != false) {
    let { cpu_Utilizada, memoria_Utilizada, disco_Utilizada, data_Hora } = resposta.data[0];
    let data_desformatada = data_Hora.split("T")[0]
    let time = data_Hora.split("T")[1]
    let dia = data_desformatada.split("-")[2]
    let mes = data_desformatada.split("-")[1]
    let ano = data_desformatada.split("-")[0]
    atualizarGrafico(graficoDonut, cpu_Utilizada, memoria_Utilizada, disco_Utilizada)
    document.getElementById("data-informacao").innerHTML = `${dia}-${mes}-${ano} ${time}`
  }
}

async function buscarDadosGraficoDestaque() {
  let resposta = await axios.post("/funcionario/picoCpu", {
    fk_Empresa: fkEmpresa
  })
  let { cpu, data_Hora, serial_Number } = resposta.data[0]
  dia = data_Hora.split("T")[0].split("-")[2]
  mes = data_Hora.split("T")[0].split("-")[1]
  ano = data_Hora.split("T")[0].split("-")[0]
  data_Hora = `${dia}-${mes}-${ano}`
  this.graficoDestaqueAtualizar(cpu, data_Hora, serial_Number)
}

async function graficoDestaqueAtualizar(cpu, data_Hora, serial_Number) {
  graficoLinha.data.labels.push(data_Hora)
  graficoLinha.data.datasets[0].data.push(cpu)
  document.getElementById("serialNumber-pico").innerHTML = `Serial Number: ${serial_Number}`
  graficoLinha.update()
}

async function atualizarGraficoEmTempos() {
  setInterval(() => {
    this.buscarDadosGraficoDestaque()
  }, 3000);
}

document.getElementById("link_maquina").onclick = function (e) {
  e.preventDefault()
  location.href = `/funcionario/maquina?key=${fkEmpresa}`
}