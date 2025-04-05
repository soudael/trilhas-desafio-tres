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