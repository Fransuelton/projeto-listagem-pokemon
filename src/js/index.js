var botaoAlterarTema = document.getElementById("botao-alterar-tema");
var body = document.querySelector("body");
var imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
botaoAlterarTema.addEventListener("click", function () {
    var modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
    }
    else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");
    }
});
