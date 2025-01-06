// Métodos podem ser adicionados aos objetos;
// Eles são como propriedades, mas contém uma função
// Invocamos os métodos do mesmo modo que funções

// 1 - métodos

const animal = {
    nome: "Bob",
    latir: function () {
      console.log("Au Au");
    },
  };
  
  console.log(animal.nome);
  animal.latir();
  
  const carro = {
    marca: "Chevrolet",
    portas: 4,
    andar: function () {
      console.log("Vrum Vrum");
    },
  };
  
  console.log(carro.marca);
  console.log(carro.portas);
  carro.andar();
  
  const music = {
    nome: "Spending My Time",
    cantor: "Roxanne",
    Palinha: function () {
      console.log("Spending my time...");
    },
  };
  
  console.log(music.nome);
  console.log(music.cantor);
  music.Palinha();
  
  // 2 - Métodos aprofundados
  /*
  Os métodos são utilizados para interagir também com as propriedades do seu objeto;
  Podemos exibir elas ou modifica-lás;
  Podemos nos referenciar com o próprio objeto com a palavra reservada this;
  */
  
  const pessoa = {
    nome: "Robson",
  
    getNome: function () {
      return this.nome;
    },
  
    setNome: function (novoNome) {
      this.nome = novoNome;
    },
  };
  
  console.log(pessoa.nome);
  
  console.log(pessoa.getNome());
  
  pessoa.setNome("Joaquim");
  
  console.log(pessoa.getNome());
  
  // 3 - Prototype
  /*
  Prototype: é um recurso que faz parte da arquitetura de Javascript;
  É uma espécie de herança, onde objetos pais herdam propriedades e métodos aos filhos;
  Por isso muitos dados são considerados objetos e temos objetos, como: String, Number, e outros;
  Ou seja, cada dado tem um objeto pai herdou caracteristicas pelo prototype;
  */
  
  const text = "asd";
  console.log(Object.getPrototypeOf(text));
  const bool = true;
  console.log(Object.getPrototypeOf(bool));
  const arr = []
  console.log(Object.getPrototypeOf(arr))