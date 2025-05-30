function entrar() {
    var emailOuUsuario = input_email.value;
    var senhaVar = input_senha.value;

    console.log("FORM LOGIN: ", emailOuUsuario);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        loginServer: emailOuUsuario,
        senhaServer: senhaVar
    })
}).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                console.log("DADOS RECEBIDOS DO BACK-END:", json);
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.USUARIO = json.usuario;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;
                });
        
                    window.location = "/dashboard/home.html";

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });

            
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function mostrarSenha() {
    const input = document.getElementById("input_senha");
    const olhoFechado = document.getElementById("olhoFechado");
    const olhoAberto = document.getElementById("olhoAberto");

    if (input.type === "password") {
        input.type = "text";
        olhoFechado.classList.add("hide");
        olhoAberto.classList.remove("hide");
    } else {
        input.type = "password";
        olhoFechado.classList.remove("hide");
        olhoAberto.classList.add("hide");
    }
}
