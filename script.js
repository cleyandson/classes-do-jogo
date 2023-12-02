class genericHero{

  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  attack(){
    let attackDescription;

    switch(this.tipo){
      case "mago":
        attackDescription = "usou magia";
        break;
      case "guerreiro":
        attackDescription = "usou espada";
        break;
      case "monge":
        attackDescription = "usou artes marciais";
        break;
      case "ninja":
        attackDescription = "usou shuriken";
        break;
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${attackDescription}`);

  }

}

let hero = new genericHero("Agamenon", 300, "guerreiro");

hero.attack();