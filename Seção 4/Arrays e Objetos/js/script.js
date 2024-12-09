// 1 - arrays
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

// 2 - Mais sobre Arrays
const arr = ["a", "b", "c", "d", "e"];
console.log(arr[4]);
// 2 - Propriedades
const number = [1, 2, 3];
console.log(number.length);
console.log(number["length"]);
const name = "Robson";
console.log(name.length);

// 4 - Métodos

const arrNumbers = [5, 6, 7];
const allNumbers = number.concat(arrNumbers);
console.log(allNumbers);
const txt = "Algum texto";
console.log(txt.toLocaleUpperCase());
console.log(typeof txt.toLocaleUpperCase);
console.log(txt.indexOf("g"));

// 5- Object Literals

const person = {
  name: "Robson",
  age: 21,
  job: "Programador"
}

console.log(person)
console.log(person.name.length)
console.log(person.age)
console.log(typeof person)