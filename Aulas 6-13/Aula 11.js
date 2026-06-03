//Questão 1
// R: O escopo de função pode ser acessado apenas dentro da função onde foi declarado, enquanto o escopo de bloco pode ser acessado dentro do bloco onde foi declarado, como em loops ou condicionais.

//Questão 2
// R: O resultado será "undefined" e "2". Isso ocorre porque a declaração da variável "x" dentro da função é hoisted (elevada) para o topo da função, mas a atribuição de valor ocorre no local original. Portanto, quando o console.log(x) é executado pela primeira vez, "x" ainda não foi atribuído, resultando em "undefined". Depois disso, "x" é atribuído o valor 2, e o segundo console.log(x) exibe "2".

//Questão 3
function exemplo() {
  if (true) {
    let nome = "Ana";
    console.log(nome);
  }
}
exemplo();

//Questão 4
for (let i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 100);
}
//R: O resultado será "0", "1" e "2". Isso ocorre porque a variável "i" é declarada com "let", que tem escopo de bloco. Cada iteração do loop cria um novo escopo para "i", permitindo que o valor correto seja capturado em cada função de callback do setTimeout. Se "var" fosse usado, o resultado seria "3", "3" e "3", pois "var" tem escopo de função e todas as funções de callback referenciariam a mesma variável "i".