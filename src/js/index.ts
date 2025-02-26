const botaoAlterarTema = document.getElementById("botao-alterar-tema") as HTMLButtonElement;
const body = document.querySelector("body") as HTMLBodyElement;
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao") as HTMLImageElement;

botaoAlterarTema.addEventListener("click", () : void => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");
    }
});