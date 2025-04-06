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
let senhaEhValida = true;

senhaCriada.addEventListener("focus", function () {
    areaRequisitos.style.display = "flex";
    requestAnimationFrame(() => {
        areaRequisitos.style.opacity = "1";
        areaRequisitos.style.flexDirection = "column";
        areaRequisitos.style.gap = "0.25rem";
    });
});

listaIcones.forEach(botao => {
    botao.addEventListener("mousedown", function(event) {
        event.preventDefault();
    });
});
document.querySelector(".sign__botao-cadastrar").addEventListener("mousedown", function(event) {
    event.preventDefault();
})

senhaCriada.addEventListener("blur", function () {
    areaRequisitos.style.opacity = 0;
    setTimeout(() => {
        areaRequisitos.style.display = "none";
    }, 200);
    
    for (let i=0; i<listaReq.length; i++) {
        if (listaReq[i].style.color !== "var(--cor-azul)") {
            senhaEhValida = false;
            break;
        } else {
            senhaEhValida = true;
        }
    }
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


// Verifica validade dos inputs em cadastro
const signEmail = document.getElementById("sign-email");
signEmail.addEventListener("blur", () => {
    if (signEmail.checkValidity() && signEmail.value !== "") {
        signEmail.style.borderColor = "var(--cor-azul)";
    } else {
        signEmail.style.borderColor = "var(--cor-vermelha-erro)";
    }
});

const signSenha = document.getElementById("sign-senha");
const bordaSenha = document.getElementById("borda-senha");
signSenha.addEventListener("blur", () => {
    if (senhaEhValida && signSenha.value !== "") {
        bordaSenha.style.borderColor = "var(--cor-azul)";
    } else {
        bordaSenha.style.borderColor = "var(--cor-vermelha-erro)";
    }
});

const confirmarSenha = document.getElementById("sign-senha-confirmar");
const bordaSenhaConfirmar = document.getElementById("borda-senha-confirmar");

confirmarSenha.addEventListener("blur", () => {
    if ((confirmarSenha.value === signSenha.value) && confirmarSenha.value !== "" && senhaEhValida) {
        bordaSenhaConfirmar.style.borderColor = "var(--cor-azul)";
    } else {
        bordaSenhaConfirmar.style.borderColor = "var(--cor-vermelha-erro)";
    }
});



// Ativar alerta
const alerta = document.getElementById("alerta-campo");
const alertaTexto = document.getElementById("alerta-texto");
let timeoutID = null;

function animarAlert() {
    if (timeoutID !== null) {
        clearTimeout(timeoutID);
        timeoutID = null;
    }
    alerta.style.transition = "none";
    alerta.style.transform = "translateY(-100%)";

    requestAnimationFrame(() => {
        alerta.style.transition = "transform 0.5s ease-out";
        alerta.style.transform = "translateY(0)";
    });
    
    timeoutID = setTimeout(() => {
        alerta.style.transform = "translateY(-100%)";
        timeoutID = null;
    }, 5000);
}


// Cadastrar conta
document.getElementById("cadastrar-conta").addEventListener("submit", function (event) {
    event.preventDefault();
    const emailDigitado = document.getElementById("sign-email").value;
    const senhaDigitada = document.getElementById("sign-senha").value;

    if (emailDigitado === "" || senhaDigitada === "") {
        alertaTexto.textContent = "Por favor, insira um email ou senha válidos.";
        animarAlert();
        return;
    }
    if (!senhaEhValida) {
        alertaTexto.textContent = "A senha não atende aos requisitos.";
        animarAlert();
        return;
    }

    const usuario = {
        email: emailDigitado,
        senha: senhaDigitada,
    };

    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario))
    alertaTexto.textContent = "Conta cadastrada com sucesso!";
    alerta.style.transform = "translateY(0)";
    animarAlert();

    telaAtual = 1;
    tituloDaPagina.innerHTML = "Login";
    telaCadastro.style.transform = "translate(100%, 0)";
    telaLogin.style.height = `${alturaLog}`;
});


// Login com conta
document.getElementById("entrar-conta").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailDigitado = document.getElementById("login-email").value;
    const senhaDigitada = document.getElementById("login-senha").value;

    if (emailDigitado === "" || senhaDigitada === "") {
        alertaTexto.textContent = "Por favor, insira seu e-mail e senha.";
        animarAlert();
        return;
    }

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioCadastrado"));

    if (usuarioSalvo && usuarioSalvo.email === emailDigitado && usuarioSalvo.senha === senhaDigitada) {
        window.location.href = "forms.html";
    } else {
        alertaTexto.textContent = "E-mail ou senha incorretos.";
        animarAlert();
    }
});


// Ativar erros semânticos
const inputErro = document.querySelectorAll(".input");
function erroDeCampo (texto) {

}

let novoInput = document.createElement("input");
novoInput.setAttribute("class", "input");



secaoInputs.insertBefore(novoInput, botaoAdicionar);