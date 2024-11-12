// // Variáveis
// // let nome = prompt("Qual o seu nome?");

// // if (nome === "Robson") {
// //   console.log("Esse cara é muito lindo");
// // } else {
// //   console.log("Esse cara é feio");
// // }

// nome = "Robson Ribeiro Alves Junior";

// const idade = 21;
// console.log(idade)

// // Const é a palavra chave ideal para criar variável

// // 2 -Mais sobre variáveis

// let a = 5, b = 4, c = 10 //Criação de variáveis em sequência

// const nomecompleto = "Robson Ribeiro"
// const nomeCompleto = "Robson Ribeiro Alves"
// console.log(nomecompleto)
// console.log(nomeCompleto)

// //Formas permitidas de criar variáveis

// let _teste = "Ok"
// let $teste = "Ok"

// console.log(_teste, $teste)
// // 3 - Prompt

// // const age = prompt("Digite sua idade:")
// // console.log(`Você tem ${age} anos`)

// // 4 - Alert
// //  alert("Teste")
// //  const z = 10
// // alert(`O número é ${z}`)

// // 5 - Math
// console.log(Math.max(1, 2, 3, 4, 5, 10))

// console.log(Math.floor(5.14))

// console.log(Math.ceil(5.64))

// //6 - Teste
// console.log("Teste!")

// console.error("Erro!")

// console.warn("Aviso!")

// /*
// Os programas são executados de cima para baixo;
// Com estas estruturas podemaos alterar o fluxo execução;
// O caminho dependerá das condições e comparações;
// As principais são if e else;
// */

// 7 - if
const m = 10;

if (m > 5) {
  console.log("M é maior");
}

const user = "João";

if (user === "joão") {
  console.log("Usuário cadastrado");
} else {
  console.log("Usuário não cadastrado");
}

if (user === "Maria") {
  console.log("Usuário cadastrado");
} else {
  console.log("Usuário não cadastrado");
}

// 8 - else
const loggedIn = true;

if (loggedIn) {
  console.log("Está autenticado");
} else {
  console.log("Não está autenticado");
}

const q = 10;
const w = 10;

if (q > 5 && w > 20) {
  console.log("Numeros mais altos");
} else {
  console.log("os numeros não são mais altos");
}

// 9 - Else if
if (1 > 2) {
  console.log("Teste");
} else if (2 < 3) {
  console.log("Teste 2");
} else if (5 > 1) {
  console.log("Agora sim!");
}

const userName = "José";
const userAge = 22;

if (userName === "José") {
  console.log("Bem vindo José");
} else if (userName === "Robson" && userAge === 21) {
  console.log("Olá Matheus, você tem 21 anos");
} else {
  console.log("Nenhuma condição aceita!");
}

//While loop

let p = 0;
while (p <= 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
}

//Loop infinito
// let x = 10
// while(x > 5){
//     console.log(`Imprimindo ${x}`)
//     p = p - 1
// }

//11 -do while
let o = 10;
do {
  console.log(`Valor de o ${o}`);
  o--;
} while (o > 2);

//12 For
for (let t = 0; t < 10; t++) {
  console.log("Repetindo algo");
}


for (r = 10; r > 0; r = r - 1) {
  console.log(`O R está diminuindo ${r}`);
}
