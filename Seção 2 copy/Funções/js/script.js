// 1-Criando uma função
function minhaFuncao() {
  console.log("Testando");
}

minhaFuncao();
minhaFuncao();
// Mais consistente
const minhaFuncaoEmVariavel = function () {
  console.log("Função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log(`imprimindo: ${txt}`);
}

funcaoComParametro("imprimindo, alguma coisa");
funcaoComParametro("outa função");

function cruzeiroCampeao(ciganaJogou) {
  console.log(`Uma bela ${ciganaJogou} as cartas`);
}

cruzeiroCampeao("cigana jogou");

function componente(primeReact) {
  console.log(`O componente utilizado foi ${primeReact}`);
}

componente("Acorddion");

// 2 - Return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(a, b) {
  return a + b;
}

const resultado = soma(c, d);
console.log(resultado);

const e = 20;
const f = 40;
const g = 50;
const h = 60;

function sub(a, b) {
  return a - b;
}

const result = sub(f, e);
console.log(result);

// 3 - Escopo da função
let y = 10;
y = 15;

function testandEscopo() {
  let y = 20;
  console.log(`Y dentro da função é ${y}`);
}

testandEscopo();

console.log(`A função de fora é ${y}`);

testandEscopo();

// 4 - Escopo Aninhado

let m = 10;

function escopoAninhado() {
  let m = 20;
  if (true) {
    let m = 30;

    if (true) {
      let m = 40;
      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}

escopoAninhado();
console.log(m);

// 5 - Arrow Function

const testeArrow = () => {
  console.log("Esta é uma Arrow Function");
};

testeArrow();

const ParOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }
  console.log("Ímpar");
};

ParOuImpar(6);
ParOuImpar(10);
// 6 - Mais sobre Arrow Function
const raizQuadrada = (x) => {
  return x * x;
};

const raizQuadrada2 = (x) => x * x; //Omitimos o bloco e deixou mais objetivo

console.log(raizQuadrada(12));
console.log(raizQuadrada2(5));

// 7 - Argumentos Opcionais

const mutiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  }
  return m * n;
};

console.log(mutiplication(5));
console.log(mutiplication(4, 4));

const greeting = (name) => {
  if (!name) {
    console.log("Olá!");
    return;
  }
  console.log(`Olá ${name}!`);
};

greeting();
greeting("Robson");

// 8 - Valor Default

const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}`;
};

console.log(customGreeting("Matheus"));
console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Testando");
repeatText(`Testando`, 5);

const copaLibertadores = (texto, campeao = 0) => {
  for (let i = 0; i < campeao; i++) {
    console.log(texto);
  }
};

copaLibertadores("O Cruzeiro foi campeão da libertadores", 2);
