// Transição de tela entre o Login e Cadastro
const cadastrarBotao = document.querySelectorAll(".cadastrar");
const telaLogin = document.querySelector(".login");
const telaCadastro = document.querySelector(".sign");

let telaAtual = 1;
cadastrarBotao.forEach(botao => {
    botao.addEventListener("click", function () {
        if (telaAtual == 1) {
            telaAtual = 2;
            telaLogin.style.transform = "translate(25%, 0)";
            telaCadastro.style.transform = "translate(-100%, 0)";
        } else {
            telaAtual = 1;
            telaLogin.style.transform = "translate(0, 0)";
            telaCadastro.style.transform = "translate(0, 0)";
        }
    });
});


// Alterar visibilidade da senha
const botaoIcone = document.querySelectorAll(".botao");

botaoIcone.forEach(botao => {
     botao.addEventListener("click", function () {
        const senhaClasse = this.parentElement.querySelector(".senha");
        const olhoIcone = this.querySelector(".icone");

        if (senhaClasse.type === "password") {
            senhaClasse.type = "text";
            olhoIcone.src = "/media/icons/OlhoFechado.svg";
        } else {
            senhaClasse.type = "password";
            olhoIcone.src = "/media/icons/OlhoAberto.svg";
        }

        olhoIcone.style.transition = "none";
        senhaClasse.style.transition = "none";
        senhaClasse.style.opacity = 0;
        olhoIcone.style.opacity = 0;

        void olhoIcone.offsetWidth;
        
        olhoIcone.style.transition = "opacity 0.3s ease-in-out";
        senhaClasse.style.transition = "opacity 0.3s ease-in-out";
        senhaClasse.style.opacity = 1;
        olhoIcone.style.opacity = 1;
     });
});


// Animação dos input
const campoInput = document.querySelectorAll("input");

campoInput.forEach(input => {
    input.addEventListener("focus", function () {
        const campoLabel = this.closest("label").querySelector("span");
        campoLabel.style.transform = "translate(0, 0) scale(0.875)";
        campoLabel.style.color = "var(--cor-cinza-escuro)";
    });
    input.addEventListener("blur", function () {
        const campoLabel = this.closest("label").querySelector("span");
        if (input.value.trim() === "") {
            campoLabel.style.transform = "translate(0.5rem, 2rem) scale(1)";
            campoLabel.style.color = "var(--cor-texto-principal)";
        }
    });
});