// Adicionar novos inputs para redes sociais
const adicionarRede = document.querySelector(".adicionar__rede");
const secaoInputs = document.getElementById("redes-sociais");
adicionarRede.addEventListener("click", function () {
    let qtdInputs = secaoInputs.querySelectorAll("input").length;
    let novoIdentificador = "rede-" + (qtdInputs + 1);

    let novoInput = document.createElement("input");
    novoInput.setAttribute("class", "input");
    novoInput.setAttribute("type", "url");
    novoInput.setAttribute("id", novoIdentificador);
    novoInput.setAttribute("name", "redeSocial");
    novoInput.setAttribute("placeholder", "https://www.exemplo.com");

    novoInput.addEventListener("blur", (event) => {
        let input = event.target;
        if (input.value.trim() === "") {
            input.remove();
        }
    });

    let botaoAdicionar = document.getElementById("adicionar-rede");
    secaoInputs.insertBefore(novoInput, botaoAdicionar);
    novoInput.focus();
});


// Formatar Data
document.getElementsByName("dataDeNascimento")[0].addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 8) {
        value = value.slice(0, 8);
    }
    value = value.replace(/(\d{2})(\d+)/, "$1/$2");
    value = value.replace(/(\d{2}\/\d{2})(\d+)/, "$1/$2");
    this.value = value;
});

// Formatar CPF
document.getElementsByName("usuarioCPF")[0].addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    value = value.replace(/(\d{3})(\d+)/, "$1.$2");
    value = value.replace(/(\d{3})(\d+)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    this.value = value;
});

// Formatar Telefone
document.getElementsByName("numeroDeTelefone")[0].addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 11) {
        value = value.slice(0, 8);
    }
    value = value.replace(/(\d{2})(\d+)/, "($1) $2");
    value = value.replace(/(\d{5})(\d+)$/, "$1-$2");
    this.value = value;
});

// Formatar CEP
document.getElementsByName("enderecoCEP")[0].addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 8) {
        value = value.slice(0, 8);
    }
    value = value.replace(/(\d{5})(\d+)/, "$1-$2")
    this.value = value;
});


// Voltar
document.querySelector(".botao__voltar").addEventListener("click", (event) => {
    event.preventDefault();
    history.back();
});


// Exibição dinâmica do nome do arquivo enviado
document.addEventListener("DOMContentLoaded", function() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        const labelText = document.querySelector(`label[for="${input.id}"] .upload__label`);
        if (labelText) {
            input.addEventListener("change", function() {
                labelText.textContent = this.files.length > 0 ? this.files[0].name : "Clique aqui para selecionar o arquivo";
            });
        }
    });
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


// Alertar campos obrigatórios
function verificarInput(string, inputAtual) {
    iconeErro = document.createElement("img");
    iconeErro.src = "/media/icons/Atencao.svg";
    iconeErro.style.width = "1rem";

    mensagemErro = document.createElement("span");
    mensagemErro.textContent = string;
    mensagemErro.style.fontSize = "0.875rem";
    mensagemErro.style.color = "var(--cor-vermelha-erro)";
    mensagemErro.style.fontWeight = 500;
    mensagemErro.classList.add("erro-semantico");

    novaDiv = document.createElement("div");
    novaDiv.style.display = "flex";
    novaDiv.style.alignItems = "center";
    novaDiv.style.gap = "0.5rem";

    novaDiv.appendChild(iconeErro);
    novaDiv.appendChild(mensagemErro);
    const sectionPai = inputAtual.parentElement;
    sectionPai.appendChild(novaDiv);
}
function alertarErro() {
    alertaTexto.textContent = "Verifique os dados inseridos.";
}

const formulario = document.getElementById("formulario");
const inputNome = document.querySelectorAll(".campo-obrigatorio");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Código iniciou");
    const listaNomes = [inputNome[0], inputNome[1]];

    // Valida o Nome Completo e o Nome Social
    listaNomes.forEach(inputAtual => {
        const valorSemLetras = inputAtual.value.trim();
        if (valorSemLetras.match(/[0-9]/)) {
            inputAtual.style.borderColor = "var(--cor-vermelha-erro)";
            verificarInput("O nome não pode conter números", inputAtual);
            alertarErro();
            animarAlert();
            console.log("Rodou nome ruim");
        }
    });

    // Valida a Data de Nascimento
    if (!verificarData(inputNome[2].value.replace(/\D/g, ''))) {
        inputNome[2].style.borderColor = "var(--cor-vermelha-erro)";
        verificarInput("Data inválida", inputNome[2]);
        alertarErro();
        animarAlert();
        console.log("Rodou data ruim");
    }

    // Valida o CPF
    if (!validarCPF(inputNome[3].value)) {
        inputNome[3].style.borderColor = "var(--cor-vermelha-erro)";
        verificarInput("CPF inválido", inputNome[3]);
        alertarErro();
        animarAlert();
        console.log("Rodou cpf ruim");
    }

    // Valida o telefone
    if (!validarCelular(inputNome[6].value.replace(/\D/g, ''))) {
        inputNome[6].style.borderColor = "var(--cor-vermelha-erro)";
        verificarInput("Número de telefone inválido", inputNome[6]);
        alertarErro();
        animarAlert();
        console.log("Rodou telefone ruim");
    }
});

// Função para validar o telefone
function validarCelular(numero) {
    const regex = /^[1-9]{2}9[6-9]\d{7}$/;
    return regex.test(numero);
}

// Função para verificar se a data é válida
function verificarData(valor) {
    let numero = valor.toString().padStart(8, '0');

    const dia = parseInt(numero.substring(0, 2));
    const mes = parseInt(numero.substring(2, 4));
    const ano = parseInt(numero.substring(4, 8));

    const data = new Date(ano, mes - 1, dia);
    const dataValida = data.getDate() === dia && data.getMonth() === mes - 1 && data.getFullYear() === ano;

    if (!dataValida) return false;

    const hoje = new Date();
    const idadeMaxima = 130;
    const anoMinimo = hoje.getFullYear() - idadeMaxima;

    if (ano < anoMinimo || data > hoje) return false;

    return true;
}

// Função para verificar se o CPF existe
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
  
    return resto === parseInt(cpf.charAt(10));
}