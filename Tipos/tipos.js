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
minhaIdade = "Idade é 27";
console.log(typeof minhaIdade);
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
// Enums
