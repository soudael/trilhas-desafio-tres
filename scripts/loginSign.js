// Transição de tela entre o Login e Cadastro - Parte 1
const telaLogin = document.querySelector(".tela__login");
const telaCadastro = document.querySelector(".tela__sign");

const atualizarAlturaCadastro = () => {
    const alturaCad = telaCadastro.offsetHeight / 16;
    document.documentElement.style.setProperty("--altura-tela-cadastro", `${alturaCad}rem`);
};
new ResizeObserver(atualizarAlturaCadastro).observe(telaCadastro);
atualizarAlturaCadastro();

const alturaLog = `${telaLogin.offsetHeight / 16}rem`;


// Transição de tela entre o Login e Cadastro - Parte 2
const cadastrarBotao = document.querySelectorAll(".botao__simples");
const tituloDaPagina = document.querySelector("title");

let telaAtual = 1;
cadastrarBotao.forEach(botao => {
    botao.addEventListener("click", function () {
        if (telaAtual == 1) {
            telaAtual = 2;
            tituloDaPagina.innerHTML = "Sign Up";
            telaCadastro.style.transform = "translate(0, 0)";

            telaLogin.style.height = getComputedStyle(telaLogin).height;
            void telaLogin.offsetHeight;

            telaLogin.style.height = "var(--altura-tela-cadastro)";
        } else {
            telaAtual = 1;
            tituloDaPagina.innerHTML = "Login";
            telaCadastro.style.transform = "translate(100%, 0)";
            telaLogin.style.height = `${alturaLog}`;
        }
    });
});


// Alterar visibilidade da senha
const botaoIcone = document.querySelectorAll(".botao__icone");

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

        olhoIcone.style.transition = "opacity 0.2s ease-in-out, transform 0.2s ease-in-out";
        senhaClasse.style.transition = "opacity 0.2s ease-in-out";
        senhaClasse.style.opacity = 1;
        olhoIcone.style.opacity = 1;
     });
});


// Ativa/desativa requisitos de senha
const senhaCriada = document.querySelector(".sign__senha-input");
const areaRequisitos = document.querySelector(".sign__senha-requisitos");
const listaIcones = document.querySelectorAll(".botao__icone");
const listaReq = document.querySelectorAll(".requisito");
const listaImg = document.querySelectorAll(".requisito img");

senhaCriada.addEventListener("focus", function () {
    areaRequisitos.style.display = "flex";
    requestAnimationFrame(() => {
        areaRequisitos.style.opacity = "1";
        areaRequisitos.style.flexDirection = "column";
        areaRequisitos.style.gap = "0.25rem";
    });
});

listaIcones.forEach(botao => {
    botao.addEventListener("mousedown", function(evento) {
        evento.preventDefault();
    });
});

senhaCriada.addEventListener("blur", function () {
    areaRequisitos.style.opacity = 0;
    setTimeout(() => {
        areaRequisitos.style.display = "none";
    }, 200);
});

senhaCriada.addEventListener("input", function () {
    const requisitos = [/[A-Z]/, /[a-z]/, /\d/, /[\W_]/, /.{8,}/];

    requisitos.forEach((requisito, index) => {
        if (senhaCriada.value.match(requisito)) {
            listaReq[index].style.color = "var(--cor-azul)";
            listaImg[index].src = "/media/icons/Certo.svg";
        } else {
            listaReq[index].style.color = "var(--cor-vermelha-erro)";
            listaImg[index].src = "/media/icons/Errado.svg";
        }
    });
});


// Código temporário
document.getElementById("entrar-conta").addEventListener("submit", function (evento) {
    evento.preventDefault(evento);
    window.location.assign("forms.html");
});


// // Armazenamento de contas cadastradas
// document.getElementById("cadastrar-conta").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const usuario = {
//         email: document.getElementById("sign-email").value,
//         senha: document.getElementById("sign-senha").value,
//     };

//     localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

//     alert("Conta cadastrada com sucesso!");
// });


// // Verificação de contas cadastradas
// document.getElementById("entrar-conta").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const emailDigitado = document.getElementById("login-email").value;
//     const senhaDigitada = document.getElementById("login-senha").value;
//     const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioCadastrado"));

//     if (usuarioSalvo && usuarioSalvo.email === emailDigitado && usuarioSalvo.senha === senhaDigitada) {
//         window.location.href = "forms.html";
//     } else {
//         alert("E-mail ou senha incorretos!");
//     }
// });