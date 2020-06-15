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
        alert("Usuário inválido!");
    }
});

function limparCamposLogin(...inputs) {
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}
