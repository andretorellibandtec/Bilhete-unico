let form = document.getElementById("form_login_func");
let input_email = document.getElementById("email");
let input_senha = document.getElementById("senha");
// backend que pega valores do front// exemplo valor que user vai digitar e passan dentro  de uma variavel chamada input


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let resposta = await axios.post("/funcionario/logarfuncionario", {
<<<<<<< HEAD
        email: input_email.value,
        senha: input_senha.value
=======

        email: input_email.value,
        senha: input_senha.value

        
>>>>>>> 90f2bd77c40e6171c20915189f70929a6158ed60

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