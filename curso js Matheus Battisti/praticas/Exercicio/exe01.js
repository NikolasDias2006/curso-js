//exe 1 imprimir um Ola mundo

console.log("Ola,mundo")

//transformando uma string para numero e mostrando seu tipo
let string = "12345"
let stringtonumber = Number(string)
console.log(typeof(stringtonumber))

//quantas caracteres tem uma string e quantas palavras possue

let frase = "Javascript is the best"
//caracteres
console.log(frase.length)

//palavras da espaço " " para separar letra por letra

console.log(frase.split(" ").length)

// loops arraw: criar uma array 5 nomes e usar o repetidor for para mostrar cada nome no console

let nomes = ["Barbosa","Dias", "Nikolas","Jaison","Ricardo"]

for (let i = 0;i < nomes.length;i++) {
        console.log(nomes[i])
}

//parei na parte 1:24:35