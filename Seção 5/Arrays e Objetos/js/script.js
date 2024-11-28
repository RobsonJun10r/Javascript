// Criando e deletando propriedades
const car = {
  engine: 2.0,
  brand: "WV",
  model: "Tiguan",
  km: 2000,
};

console.log(car);

car.doors = 4;
console.log(car);

delete car.km;

console.log(car);

// 7 - Mais sobre objetos
const obj = {
  a: "teste",
  b: true,
};
console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj); // pega os dados do obj e coloca no ob2

console.log(obj2);

// 8 - Conhecendo mais objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação
const a = {
  name: "Robsom",
  age: 31,
};

const b = a;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - Loop em Arrays

const users = ["Matheus", "João", "Pedro", "Robson"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário ${users[i]}`);
}

// 11 - Métodos de array: push e pop

const array = ["a", "b", "c"];
console.log(array);
// Adiciona um item no final da array
array.push("d");
console.log(array);

// Remove o último item da array
const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);

//Para adiionar mais de um basta usar vírgula
array.push("x", "y", "z");
console.log(array);

// 12 - Shift e unshift

//Tira do início da array e retorna
const letter = array.shift();
console.log(letter);
console.log(array);

// Adiciona no início da array
array.unshift("a", "e", "i", "o", "u");
console.log(array);

// 12 - indexOf e lastIndexOf

const frutas = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"];
console.log(frutas.indexOf("Abacate"));

// Mesmo resultado
console.log(frutas[2]);
console.log(frutas[frutas.indexOf("Abacate")]);

//Pega da esquerda pra direita, ou a última ocorrência que no caso é o segundo abacate
console.log(frutas.lastIndexOf("Abacate"));
//Retorna -1
console.log(frutas.indexOf("Abóbora"));
console.log(frutas.lastIndexOf("Abóbora"));

// 13 - Slice

const carros = ["Camaro", "Mustang", "Porsche", "Celta", "Gol"];
//Pega do índice 2 até o 4
const subCarros = carros.slice(2, 4);
console.log(carros);
console.log(subCarros);

//Pega até o último Array
const subCarros1 = carros.slice(2, 4 + 1);
console.log(subCarros1);

//Retorna uma lista vazia
const subCarros2 = carros.slice(10, 20);
console.log(subCarros2);

//Pega do índice passado em diante
console.log(carros.slice(1));

// 14 ForEach - Passa por cada item da lista

const nums = [1, 2, 3, 4, 5];
nums.forEach((n) => {
  console.log(`numero é ${n}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "Javascript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo ${post.title} da categoria ${post.category}`);
});

// 15 Includes - Busca por elemento específico
const brands = ["Bmw", "Porsche", "Fiat"];

console.log(brands.includes("Fiat"));

if (brands.includes("Bmw")) {
  console.log("Há carros da marca Bmw");
}

// 16- Reverse - inverte elementos de um Array;

const reversTeste = [1, 2, 3, 4];

reversTeste.reverse();

console.log(reversTeste);

// 17 - Métodos String: trim;

const trimTest = "   testando \n  ";
console.log(trimTest);
console.log(trimTest.trim());
console.log(trimTest.length);
console.log(trimTest.trim().length);

// 18 - Método Padstart

const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0"); //Adiciona no início da String

console.log(testePadStart);
console.log(newNumber.padEnd(10, "0")); //Adiciona no final da String

const testePadEnd = testePadStart.padEnd(4, "0");
console.log(testePadEnd);

// 19 - Método Split

const frase = "O rato roel a roupa do rei de roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// 20 - Método Join
const frasedenovo = arrayDaFrase.join(" ");
console.log(frasedenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}`;
console.log(fraseDeCompra);

const carrosDisponíveis = ["Corolla", "Civic", "Celta", "Nivus", "Onix"];
const exibirDisponíveis = `Os carros disponíveis são ${carrosDisponíveis.join(
  ", "
)}`;
console.log(exibirDisponíveis);

//21 - Repeat

const palavra = "testando ";
console.log(palavra.repeat(5));

//22 - Rest Operator

const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1238129038, 123123123, 13, 123, 134, 1321314));

//23 - for...of

const somaInfinita2 = (...args) => {
  let total = 0;
  for (num of args) {
    total += num;
  }
  return total;
};

console.log(somaInfinita2(1,2))