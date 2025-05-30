var maiuscula = /[A-Z]/
var minuscula = /[a-z]/
var simbolo = /[!@#$]/
var numero = /[0-9]/
var senhaForte = false

function cadastrar() {

var nomeVar = input_nome.value;
var userVar = input_user.value;
var emailVar = input_email.value;
var senhaVar = input_senha.value;
var idUsuarioVincular

var temMaiuscula = maiuscula.test(senhaVar)
var temMinuscula = minuscula.test(senhaVar)
var temSimbolo = simbolo.test(senhaVar)
var temNumerico = numero.test(senhaVar)
var temTamanho = senhaVar.length >= 8

senhaForte = temMaiuscula && temMinuscula && temSimbolo && temNumerico && temTamanho

if (nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    userVar == ""){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos campos para prosseguir!", 
        color: "#50080b"
      });
} else if (senhaForte == false){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Senha fraca, necessita de 8 caracteres, 1 maiúscula, 1 minuscula, um número e um caracter especial!",
    color: "#50080b"
  });
} else {
    Swal.fire({
    title: "Sucesso!",
    text: "Usuário cadastrado!!",
    icon: "success"
    });

     window.location.href = "login.html"

fetch("/usuarios/cadastrar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nomeServer: nomeVar,
    userServer: userVar,
    emailServer: emailVar,
    senhaServer: senhaVar,
    idUsuarioServer: idUsuarioVincular
  }),
})
}   
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