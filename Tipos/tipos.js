"use strict";
//  já detecta o tipo da variavel na declaracao
// String
let nome = "João";
console.log(nome);
// Numbers
let idade = 27;
console.log(idade);
// Boolean
let possuiHobbies = false;
console.log(possuiHobbies);
// Tipos explicitos
// "any" pode ser Number, String e Boolean
let minhaIdade;
minhaIdade = 25;
console.log(typeof minhaIdade);
// minhaIdade = "Idade é 27";
// console.log(typeof minhaIdade);
// Array
let hobbies = ["Cozinhas", "Praticar"];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
console.log(typeof hobbies);
//  Tuplas
let endereco = ["Central", 124];
console.log(endereco);
endereco = ["Manoel", 250];
// Enums - valores pré definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 10] = "Cinza";
    Cor[Cor["Verde"] = 11] = "Verde";
    Cor[Cor["Azul"] = 100] = "Azul";
    Cor[Cor["Vermelho"] = 101] = "Vermelho";
    Cor[Cor["Amarelo"] = 102] = "Amarelo";
})(Cor || (Cor = {}));
let minhaCor = Cor.Amarelo;
console.log("minhaCor");
console.log(Cor.Azul);
console.log(Cor.Cinza, Cor.Verde);
console.log(Cor.Vermelho, Cor.Amarelo);
// Any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// Funções 
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOI() {
    console.log("OI....");
}
digaOI();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4, 9));
// Tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
//  Objetos
let usuario = {
    nome: "Joana",
    idade: 24
};
console.log(usuario);
usuario = {
    idade: 25,
    nome: "Kaio"
};
console.log(usuario);
