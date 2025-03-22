var img = document.getElementById("seta-voltar");
img.src = "./assets/icons/SetaEsquerdaCinza.svg";

/* ------------------- Alterar seta de acordo com o hover ------------------- */

function trocarSetaParaLaranja() {
    var img = document.getElementById("seta-voltar");

    setTimeout(function () {
        img.src = "./assets/icons/SetaEsquerdaLaranja.svg";
        img.style.opacity = "1";
    });
}

function trocarSetaParaCinza() {
    var img = document.getElementById("seta-voltar");

    setTimeout(function () {
        img.src = "./assets/icons/SetaEsquerdaCinza.svg";
        img.style.opacity = "1";
    });
}

var img = document.getElementById("link-voltar");
img.addEventListener("mouseover", trocarSetaParaLaranja);
img.addEventListener("mouseout", trocarSetaParaCinza);


/* --------------- Adicionar novos inputs para redes sociais ---------------- */

function verificarInput(event) {
    let input = event.target; // seleciona apenas o input que deu origem à execução desse evento
    if (input.value.trim() === "") { // acontece caso não haja nada escrito no input
        input.previousElementSibling?.remove(); // remove quebra de linha criada
        input.remove(); // remove o input
    }
}

function adicionarRedeSocial() {
    let section = document.getElementById("redes-sociais");
    let qtdInputs = section.querySelectorAll("input").length;
    let novoIdentificador = "rede-" + (qtdInputs + 1); // cria um novo ID baseado na quantidade de inputs até o momento

    let novoInput = document.createElement("input"); // define os atributos do novo input
    novoInput.setAttribute("class", "forms__input");
    novoInput.setAttribute("id", novoIdentificador);
    novoInput.setAttribute("name", "rede-social");
    novoInput.setAttribute("placeholder", "Insira um link");

    novoInput.addEventListener("blur", verificarInput); // testa se a caixa do input foi desselecionada

    let pularLinha = document.createElement("br"); // cria uma quebra de linha

    let botao = document.getElementById("adicionar-rede");
    section.insertBefore(pularLinha, botao); // adiciona quebra de linha
    section.insertBefore(novoInput, botao); // adiciona novo input

    novoInput.focus(); // habilita a escrita dentro do input logo que é criado
}

/* ------------------------------- FORMATAÇÃO ------------------------------- */

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


/* ----- Envio de arquivos: display din6amico do nome do arquivo enviado ----- */

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