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