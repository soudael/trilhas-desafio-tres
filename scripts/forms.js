// Alterar seta de acordo com o hover
const voltar = document.getElementById("link-voltar");
const setaLaranja = document.getElementById("seta-laranja");
const span = document.querySelector(".forms__introducao__label");

voltar.addEventListener("mouseover", function () {
    span.style.color = "var(--cor-laranja-claro)";
    setaLaranja.style.opacity = 1;
});
voltar.addEventListener("mouseout", function () {
    span.style.color = "var(--cor-cinza)";
    setaLaranja.style.opacity = 0;
});


// Adicionar novos inputs para redes sociais
function adicionarRedeSocial() {
    let section = document.getElementById("redes-sociais");
    let qtdInputs = section.querySelectorAll("input").length;
    let novoIdentificador = "rede-" + (qtdInputs + 1);

    let novoInput = document.createElement("input");
    novoInput.setAttribute("class", "forms__input");
    novoInput.setAttribute("type", "url");
    novoInput.setAttribute("id", novoIdentificador);
    novoInput.setAttribute("name", "rede-social");
    novoInput.setAttribute("placeholder", "Insira um link");

    novoInput.addEventListener("blur", (event) => {
        let input = event.target;
        if (input.value.trim() === "") {
            input.previousElementSibling?.remove();
            input.remove();
        }
    });

    let pularLinha = document.createElement("br");

    let botao = document.getElementById("adicionar-rede");
    section.insertBefore(pularLinha, botao);
    section.insertBefore(novoInput, botao);

    novoInput.focus();
}

// Formatação de inputs do tipo número
function formatarData(input) {
    let value = input.value.replace(/\D/g, "");

    if (value.length > 8) {
        value = value.slice(0, 8);
    }
    value = value.replace(/(\d{2})(\d+)/, "$1/$2");
    value = value.replace(/(\d{2}\/\d{2})(\d+)/, "$1/$2");
    input.value = value;
}

function formatarCPF(input) {
    let value = input.value.replace(/\D/g, "");

    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    value = value.replace(/(\d{3})(\d+)/, "$1.$2");
    value = value.replace(/(\d{3})(\d+)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    input.value = value;
}

function formatarTel(input) {
    let value = input.value.replace(/\D/g, "");

    if (value.length > 11) {
        value = value.slice(0, 8);
    }
    value = value.replace(/(\d{2})(\d+)/, "($1) $2");
    value = value.replace(/(\d{5})(\d+)$/, "$1-$2");
    input.value = value;
}

function formatarCEP(input) {
    let value = input.value.replace(/\D/g, "");

    if (value.length > 8) {
        value = value.slice(0, 8);
    }
    value = value.replace(/(\d{5})(\d+)/, "$1-$2")
    input.value = value;
}


// Exibição dinâmica do nome do arquivo enviado
document.addEventListener("DOMContentLoaded", function() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        const labelText = document.querySelector(`label[for="${input.id}"] .forms__upload__label`);
        if (labelText) {
            input.addEventListener("change", function() {
                labelText.textContent = this.files.length > 0 ? this.files[0].name : "Clique aqui para selecionar o arquivo";
            });
        }
    });
});