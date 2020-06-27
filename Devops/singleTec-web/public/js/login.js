let formLogin = document.getElementById("form_login");
let btn_logar_funcionario = document.getElementById("btn_logar_funcionario")
let email_funcionario = document.getElementById("email-funcionario");
let senha_funcionario = document.getElementById("senha-funcionario")
// logando empresa
formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    let input_usuario = document.getElementById("usuario");
    let input_senha = document.getElementById("senha");

    try {
        let resposta = await axios.post("/empresa/logar", {
            email: input_usuario.value,
            senha: input_senha.value
        });
        token = resposta.data;
        localStorage.setItem("tokenEmpresa", token);
        location.href = "empresa/home"
    } catch (error) {
        abrirModal("Falha ao logar!", "#B22222")
        setTimeout(() => {
            fecharModal();
        }, 4000);
    }
});

function limparCamposLogin(...inputs) {
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function abrirModal(texto, cor) {
    div_modal = document.querySelector(".modal-index")
    span_texto = document.querySelector(".modal-index span")
    span_texto.innerHTML = texto;
    div_modal.style.backgroundColor = cor;
    div_modal.style.transition = "all 1s linear"
    div_modal.style.right = "0%"
}

function fecharModal() {
    div_modal = document.querySelector(".modal-index")
    div_modal.style.right = "-100%"
}

btn_logar_funcionario.addEventListener("click", async () => {
    email = email_funcionario.value;
    senha = senha_funcionario.value;
    if (email == "" && senha == "") {
        alert("preencha todos os campos!")
    } else {
        try {
            let resposta = await axios.post("/funcionario/logar", {
                email,
                senha
            });
            if (!resposta.data) {
                alert("Falha ao logar ")
            } else {
                token = resposta.data;
                localStorage.setItem("tokenFuncionario", token);
                location.href = "/funcionario/home"
            }
        } catch (error) {
            console.log(error)
        }
    }
})