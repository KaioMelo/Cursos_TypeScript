//  já detecta o tipo da variavel na declaracao

// String

let nome: string = "João";
console.log(nome);

// Numbers

let idade: number = 27;
console.log(idade);

// Boolean

let possuiHobbies: boolean = false;
console.log(possuiHobbies);

// Tipos explicitos
// "any" pode ser Number, String e Boolean

let minhaIdade: number;
minhaIdade = 25;
console.log(typeof minhaIdade);
// minhaIdade = "Idade é 27";
// console.log(typeof minhaIdade);

// Array

let hobbies: any[] = ["Cozinhas", "Praticar"];
console.log(hobbies);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
console.log(hobbies);
console.log(typeof hobbies);

//  Tuplas

let endereco: [string, number] = ["Central", 124];
console.log(endereco);

endereco = ["Manoel", 250];

// Enums - valores pré definidos

enum Cor {
  Cinza = 10,
  Verde,
  Azul = 100,
  Vermelho,
  Amarelo,
}

let minhaCor: Cor = Cor.Amarelo;
console.log("minhaCor");

console.log(Cor.Azul)
console.log(Cor.Cinza, Cor.Verde)
console.log(Cor.Vermelho, Cor.Amarelo)

// Any

let carro: any = "BMW"
console.log(carro)
carro = {marca: "BMW", ano: 2019}
console.log(carro)


// Funções 

function retornaMeuNome(): string{
    // return minhaIdade
    return nome
}
console.log(retornaMeuNome())

function digaOI(): void{
    console.log("OI....")
}
digaOI()

function multiplicar(numA: number, numB: number): number{
    return numA * numB
}
console.log(multiplicar(4, 9))

// Tipo função

let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(5, 6))

//  Objetos

let usuario: {nome: string, idade: number} = {
    nome: "Joana",
    idade: 24
}

console.log(usuario)

usuario = {
    idade: 25,
    nome: "Kaio"
}

console.log(usuario)


// Desafio 

/*
    Criar um objeto funcionario com: 
        - função de string com os nomes dos supervisor
        - função de bater ponto que recebe a hora (número)
            e retornar uma string
            -> ponto normal (<= 8)
            -> fora do horário (>8)
*/

//  Criacao de um tipo

type Funcionario = {
    supervisor: string[],
    batePonto: (horas: number) => string
}

/*
let funcionario : {
    supervisor: string[],
    batePonto: (horas: number) => string
} = {
    supervisor: ['Ana', 'Fernando'],
    batePonto(horario: number): string{
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'fora do horário'
        }
    }
}
*/

let funcionario : Funcionario = {
    supervisor: ['Ana', 'Fernando'],
    batePonto(horario: number): string{
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'fora do horário'
        }
    }
}

console.log(funcionario.supervisor)
console.log(funcionario.batePonto(8))
console.log(funcionario.batePonto(9))

//  union types

let nota: number | string = 10
console.log(`minha nota é ${nota}`)
nota = "10"
console.log(`minha nota é ${nota}`)


//  checando tipos

let valor = 30

if(typeof valor === "number"){
    console.log("é um number!")
}else{
    console.log(typeof valor)
}

//  never

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preco inválido!')
        }
    }
}

produto.validarProduto()