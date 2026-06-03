// Questão 1
function executarDuasVezes(fn) {
 console.log("Início");
 fn();
 fn();
 console.log("Fim");
}
executarDuasVezes(() => console.log("Função executada"));

// Questão 2
function criarSaudacao(saudacao) {
 return function(nome) {
 console.log(`${saudacao}, ${nome}!`);
 }
}

const saudacaoPersonalizada = criarSaudacao("Olá");
saudacaoPersonalizada("Enrico");

// Questão 3
function calcular(valor, valor2,  operacao) {
 return operacao(valor, valor2);
}

const soma = (a, b) => a + b;
console.log(calcular(4, 8, soma)); 

// Questão 4
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const adicionar2 = x => x + 2;
const multiplicarPor3 = x => x * 3;
const composta = compose(multiplicarPor3, adicionar2);
console.log(composta(4)); 