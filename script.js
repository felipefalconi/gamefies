let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {

    if (menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado");

        iconeBarras.style.display = "none";
        iconeX.style.display = "inline";
    } else {

        menu.classList.add("menu-fechado");

        iconeX.style.display = "none";
        iconeBarras.style.display = "inline";
    }
}

onresize = () => {

    menu.classList.remove("menu-fechado")


    iconeBarras.style.display = "none"


    iconeX.style.display = "inline"
}


function solicitarOrcamento(event) {
    let valorEmail = document.getElementById("campo-nome").value
    let valorNome = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    console.log(dadosForm)
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })

        .then(resposta => {
            if (resposta.ok) { 
                console.log(resposta);

                document.querySelector(".form").reset();

                alert("Solicitação enviada com sucesso!!! 👌");
            } else {
                alert("Erro na requisição😓");
            }
        })
        .catch(erro => {
            console.log(erro);
            alert("Erro na requisição😓");
        });
}