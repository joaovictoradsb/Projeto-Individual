function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var usuario = sessionStorage.USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null && usuario != null) {
        b_usuario.innerHTML = usuario;
    } else {
        window.location = "../../login.html";
    }
}

function logout() {
    sessionStorage.clear();
    window.location = "../../login.html";
}