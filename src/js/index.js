/*
OBJETIVO 1 - quando clicarmos na seta de avançar, termos que
mostrar o próximo cartão da lista.
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar;
    - passo 2 - dar um jeito de identificar o clique do usuário
    na seta avançar;
    - passo 3 - fazer aparecer o próximo cartão da lista;
    - passo 4 - buscar o cartão que está selecionado e esconder.
*/

/*
OBJETIVO 2 - quando clicarmos na seta de voltar, termos que
mostrar o cartão anterior da lista.
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar;
    - passo 2 - dar um jeito de identificar o clique do usuário
    na seta voltar;
    - passo 3 - fazer aparecer o cartão anterior da lista;
    - passo 4 - buscar o cartão que está selecionado e esconder.
*/
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao() {
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {

    if(cartaoAtual == 2) {
        cartaoAtual = 0;
        cartaoAtual --;
    }

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();

});

btnVoltar.addEventListener("click", function () {  

    if(cartaoAtual == 0) {
        cartaoAtual = cartoes.length;
    }

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();
});