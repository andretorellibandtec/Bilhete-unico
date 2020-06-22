let formLogin = document.getElementById("form_login");

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
        localStorage.setItem("token", token);
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