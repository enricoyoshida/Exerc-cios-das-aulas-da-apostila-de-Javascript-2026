// Questão 1
function saudacao() {
 let nome = "Péricles";
 return function mensagem() {
 console.log(`Olá, ${nome}!`);
 }
}

const mensagem = saudacao();
mensagem();

// Questão 2
function multiplicador(x) {
    return function(y) {
        return x * y;
    }
}

const multiplicarPor2 = multiplicador(2);
console.log(multiplicarPor2(5));

// Questão 3
// R: Closure são importantes para criar funções que mantêm acesso a variáveis de seu escopo externo, mesmo após a execução da função externa ter terminado. Isso permite a criação de funções com estado privado e é amplamente utilizado em programação funcional e em situações onde é necessário encapsular dados.

// Questão 4
function criarContador() {
 let i = 0;
 return function() {
 return ++i;
 }
}
let c1 = criarContador();
let c2 = criarContador();
console.log(c1()); 
console.log(c1()); 
console.log(c2()); 
// R: O resultado será "1" para o primeiro console.log, "2" para o segundo console.log e "1" para o terceiro console.log. Isso ocorre porque cada chamada à função criarContador() cria um novo escopo de variável "i", e as funções retornadas mantêm acesso a esse escopo, permitindo que cada contador funcione de forma independente.
