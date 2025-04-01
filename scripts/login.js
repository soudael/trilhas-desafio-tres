const botaoIcone = document.querySelector(".botao");
const icone = botaoIcone.querySelector(".icone");
const senha = document.querySelector(".senha");
const cadastrar = document.querySelectorAll(".cadastrar");
const telaCadastro = document.querySelector(".sign");
const telaLogin = document.querySelector(".login");

botaoIcone.onclick = function () {
    if (icone.src.endsWith("OlhoAberto.svg")) {
        senha.removeAttribute("type", "password");
        icone.src = "/media/icons/OlhoFechado.svg";
    } else {
        senha.setAttribute("type", "password");
        icone.src = "/media/icons/OlhoAberto.svg";
    }
}

let telaAtual = 1;
cadastrar.forEach(botao => {
    botao.addEventListener("click", function () {
        if (telaAtual == 1) {
            telaAtual = 2;
            telaCadastro.style.transform = "translate(0, 0)";
            telaLogin.style.transform = "translate(-100%, 0)";
        } else {
            telaAtual = 1;
            telaCadastro.style.transform = "translate(100%, 0)";
            telaLogin.style.transform = "translate(0, 0)";
        }
    });
})