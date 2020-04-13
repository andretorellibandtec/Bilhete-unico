var imgSpinner = document.querySelector("#spinner");
var form = document.querySelector("#form");
var submit = document.querySelector("#submit");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    imgSpinner.style.display = "inline";

    inputNome = document.querySelector("#nome");
    inputRemetente = document.querySelector("#e-mail");
    inputTitulo = document.querySelector("#titulo");
    inputMensagem = document.querySelector("#mensagem");


    axios.post("/email", {
        remetente: inputRemetente.value,
        titulo: inputTitulo.value,
        mensagem: inputMensagem.value
    }).then((resposta) => {
        if (resposta.data.statusCode == 200) {
            imgSpinner.style.display = "none";
            alert("Email enviado com sucesso!");
            limparCampos(inputNome, inputRemetente, inputTitulo, inputMensagem);
        } else {
            imgSpinner.style.display = "none";
            alert("Falha ao enviar e-mail!");
        }
    }).catch((erro) => {
        console.error(erro);
    });
});

function limparCampos(...params) {
    for (i = 0; i < params.length; i++) {
        params[i].value = "";
    }
}