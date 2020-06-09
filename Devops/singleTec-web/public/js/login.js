
function limparCampos(...inputs) {
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

let formLogin = document.getElementById("form_login");
formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    let input_usuario = document.getElementById("usuario");
    let input_senha = document.getElementById("senha");


    let resposta = await axios.post("/empresa/logar", {

        email: input_usuario.value,
        senha: input_senha.value

    });

    console.log(resposta);

});
