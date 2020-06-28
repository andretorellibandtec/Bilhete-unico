var barra = document.getElementById('barra').getContext('2d');
var donut = document.getElementById('donut').getContext('2d');
fkEmpresa = null;
idFuncionario = null;
nomeFuncionario = null;
graficoBarra = null;
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
  graficoBarra = new Chart(barra, {
    type: 'bar',
    data: {
      labels: ['jan', 'fev', 'mar', 'abri', 'maio', 'junho', 'julho', 'ago', 'set', 'out', 'nov', 'Dez'],
      datasets: [{
        label: 'Gráfico Anual',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'

        ],
        borderWidth: 1
      }]
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
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)']
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
  let { cpu_Utilizada, memoria_Utilizada, disco_Utilizada, data_Hora } = resposta.data[0];
  let data_desformatada = data_Hora.split("T")[0]
  let time = data_Hora.split("T")[1]
  let dia = data_desformatada.split("-")[2]
  let mes = data_desformatada.split("-")[1]
  let ano = data_desformatada.split("-")[0]
  atualizarGrafico(graficoDonut, cpu_Utilizada, memoria_Utilizada, disco_Utilizada)
  document.getElementById("data-informacao").innerHTML = `${dia}-${mes}-${ano} ${time}`
}


document.getElementById("link_maquina").onclick = function (e) {
  e.preventDefault()
  location.href = `/funcionario/maquina?key=${fkEmpresa}`
}