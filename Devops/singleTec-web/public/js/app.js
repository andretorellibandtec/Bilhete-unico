cadastro_login = document.getElementById("cadastro_login");
login_funcionario = document.getElementById("container-login-funcionario");
close_login_funcionario = document.getElementById("close-login-funcionario");

cadastro_login.addEventListener("click", (e) => {
    e.preventDefault();
});

// Envia e-mail para o mailtrap.
var imgSpinner = document.querySelector("#spinner");
var form = document.querySelector("#form");
var submit = document.querySelector("#submit");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        imgSpinner.style.display = "inline";
        inputNome = document.querySelector("#nome");
        inputRemetente = document.querySelector("#e-mail");
        inputTitulo = document.querySelector("#titulo");
        inputMensagem = document.querySelector("#mensagem");
        let resposta = await axios.post("/admin/email", {
            remetente: inputRemetente.value,
            titulo: inputTitulo.value,
            mensagem: inputMensagem.value,
        });
        if (resposta.status == 200) {
            alert(resposta.data);
            imgSpinner.style.display = "none";
        }
    } catch (error) {
        imgSpinner.style.display = "none";
        console.error(error);
    }
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


// ir para a página de cadastro de empresa
function cadastrarEmpresa() {
    window.location.href = "/cadastro";
}


// modal modal do funcionario

function loginModalFuncionario(){
    login_funcionario.style.display = "flex"
}

close_login_funcionario.addEventListener("click" , ()=>{
    login_funcionario.style.display = "none"
})