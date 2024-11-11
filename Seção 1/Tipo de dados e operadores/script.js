// 1 - number
const nome = "Robson";
const idade = 12;
const temfaculdade = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof temfaculdade);

//2-Op Aritméticas
console.log(2 + 4 * (9 + 9));
console.log((25 * 2) / 25);
console.log(((25 * 2) / 25) * 45 - 90 * (32 + 98));
console.log(2 + 3 - 4 * (5 + 3));

//3-Special Numbers
console.log(typeof Infinity); //number
console.log(typeof -Infinity); //number
console.log(12 * "teste"); //NaN
console.log(typeof NaN); // Number

// 4-Strings
console.log(typeof "Um texto");
console.log(typeof `Mais um texto`);

// 5-Caracteres Especiais JS
console.log("Text em \nDuas Linhas");
console.log("Espaçamento \t de tab");

// 6-Concatenação
console.log(`Oi, tudo bem?`);

// 7-Interpolação (Template Strings)
console.log(`A soma de 2+2 = ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`); //Não utilizar assim

// 8-Boolean
console.log(true);
console.log(false);
console.log(typeof false);
console.log(5 > 20);
console.log(5 < 20);

// 9-Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 === 10);

console.log(10 === 9);

console.log(10 != 9);

//10 - Idêntico
console.log(9 === "9");

console.log(9 !== "9");

//11 -Operadores Lógicos
// && - AND - true apenas se os dois lados forem verdadeiros;
// || - OR - para ser true, um lado como true é suficiente;
// ! - NOT - este operador inverte a comparação;
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 5 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(5 > 2 || "Matheus" === 1);

console.log(5 > 2 || 5 > 100);

// 12 - Empty Values
console.log(typeof null, typeof undefined); //true, true

console.log(null === undefined); //False: são diferentes

console.log(null == undefined); //Verdadeiro pois não possuem valores, mas não são idênticos

console.log(null == false); //False: null não é igual a falso

console.log(undefined == false); //False: undefined não é igual a falso

// 13 - Conversão de tipo automática
console.log(5 * null); // 5 * null => 0
console.log('5' - 3);// '5' - 3 => 2
console.log('5' + 1);// '5' + 1 => 51
console.log('a' * 'b');// 'a' * 'b' => NaN
console.log('10' - 1); // Aqui subtrai
console.log('10' + 1); // Aqui concatena
//Sempre converte textos/números para números
