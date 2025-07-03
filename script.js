// Pegamos os botões da escolha: pedra, papel e tesoura
// lá no html podemos colocar todos os botões dentro da área com classe "choices"
const botoes = document.querySelectorAll(".choices button") // essa linha do código seleciona vários botões do HTML e guarda eles em uma variável chamada botões

// Pegamos os textos que mostram as mensagens na tela
// essas mensagens são para mostrar o qwue o jogador fez e quem venceu
const textoJ1 = document.getElementById("player1-choice") // onde vai aparecer a escolha do jogador 1
const textoJ2 = document.getElementById("player2-choice") // onde vai aparecer a escolha do jogador 2

const textoResultado = document.getElementById("winner") // onde aparece o resultado do jogo
// Variáveis que guardam o que cada jogador escolheu
// começando com "null", ou seja, sem nenhuma escolha
let jogada1 = null;
let jogada2 = null;
/** Função que recebe as escolhas dos dois jogadores 
 * Compara as jogadas e devolve (return) quem venceu ou se foi empate
 */
function verificarVencedor(j1, j2){
    // se os dois escolheram a mesma coisa, é empate
    if(j1 === j2){
        return "Empate!!!!!!"
    // Aqui estão as regras do jogo
    // Pedra ganha da tesoura
    // Papel ganha da pedra
    // Tesoura ganha do papel
    }if((j1 === "pedra" && j2 === "tesoura") || (j1 === "papel" && j2 === "pedra") || (j1 === "tesoura" && j2 === "papel")){
     return "Jogador 1 venceu!!!!!!!!!!!!!"
    }else{ // se nenhuma das condições acima for verdadeira, então o jogador 2 venceu
        return "Jogador 2 venceu!!!!!!!!!"
    }
} 

// função que reinicia o jogo para uma nova rodada
// apaga as escolhas anteruiores e atualiza os textos na tela
function novoJogo(){
    jogada1 = null; // zera a escolha do jogador 1
    jogada2 = null; // zera a escolha do jogador 2

    textoJ1.textContent = "Jogador 1: escolha" // mostra essa mensagem orientando o jogador 1
    textoJ2.textContent = "Jogador 2: escolha" // mostra essa mensagem orientando o jogador 2

    textoResultado.textContent = " " // apaga o resultado anterior
}
/** Aqui é onde tratamos os cliques nos botões
 * no caso, quando alguém clicar em "pedra, papel ou tesoura"
 */
botoes.forEach( botao => {
    botao.addEventListener("click", () => { // pegamos uma escolha que está no botão clicado (esse valor guardado no atributo data-choice lá no html)
     const escolha = botao.getAttribute("data-choice") // ela vai pegar o valor do atributo data-choice do botão que foi clicado. Esse valor pode ser: pedra, papel ou tesoura

     // se o jogador 1 ainda não escolheu
     if(jogada1 === null){
        jogada1 = escolha // guarda a escolha
        textoJ1.textContent = "Jogador 1 já escolheu" //mostra que já escolheu (mas não revela o que)
        textoResultado.textContent = "Vez do jogador 2!" // informa que agora é a vez do jogador 2

     }else if( jogada2 === null){ // se o jogador 1 já escolheu, agora é a vez do jogador 2 
     jogada2 = escolha; // guarda a escolha
     textoJ2.textContent = "Jogador 2 já escolheu";
     // Agora que os dois jogadores já escolheram, chamamos a funçãopara verificar quem venceu
     const resultado = verificarVencedor(jogada1, jogada2)
     // mostramos o resultado na tela junto com as jogadas
     textoResultado.textContent = `${resultado} (J1: ${jogada1} | J2: ${jogada2})`
     }
     // Se os dois jogadores já jogaram, começamos uma nova rodada automaticamente
     else{
        novoJogo() // zera tudo para começar de novo
        jogada1 = escolha // o jogador 1 faz sua nova escolha
        textoJ1.textContent = "Jogador 1 já escolheu";
        textoResultado.textContent = "Vez do jogador 2!";
        
     }

    });
});
 // quando a página é carregada, chamamos a função
novoJogo()



