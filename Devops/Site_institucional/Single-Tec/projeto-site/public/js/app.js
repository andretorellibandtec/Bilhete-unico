cadastro_login = document.getElementById("cadastro_login");
cadastro_login.addEventListener("click", (e) => {
    e.preventDefault();
});



// Envia e-mail para o mailtrap.
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





function cadastrar() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {

        if (response.ok) {


            window.location.href = 'javascript: showLoginForm();';

        } else {

            alert('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });

        }
    });

    return false;
}



function logar() {


    var formulario = new URLSearchParams(new FormData(form_login));


    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                alert('Login realizado!');
                sessionStorage.login_usuario_meuapp = json.login;
                sessionStorage.nome_usuario_meuapp = json.nome;

            });
        } else {

            alert('Erro de login!');

        }
    });
    return false;
}