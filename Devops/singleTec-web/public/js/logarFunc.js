let form = document.getElementById("form_login_func");
let input_email = document.getElementById("email");
let input_senha = document.getElementById("senha");



form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let resposta = await axios.post("/funcionario/logarfuncionario", {
        email: input_email.value,
        senha: input_senha.value

    });

    if (resposta.data == false) {
        alert("Deu ruim");
        console.log(resposta);
    } else {
        alert("Foi ");
        console.log(resposta);
    }

});

function limparCampos(...inputs) {
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}