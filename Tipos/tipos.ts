//  já detecta o tipo da variavel na declaracao

// String 

let nome: string = "João"
console.log(nome)

// Numbers

let idade: number = 27
console.log(idade)

// Boolean

let possuiHobbies: boolean = false
console.log(possuiHobbies)

// Tipos explicitos 
// "any" pode ser Number, String e Boolean

let minhaIdade: any 
minhaIdade = 25
console.log(typeof minhaIdade)
minhaIdade = "Idade é 27"
console.log(typeof minhaIdade)

// Array

let hobbies: any[] = ["Cozinhas", "Praticar"]
console.log(hobbies)
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)
console.log(typeof hobbies)

//  Tuplas

let endereco: [string, number] = ["Central", 124]
console.log(endereco)

endereco = ["Manoel", 250]

// Enums

