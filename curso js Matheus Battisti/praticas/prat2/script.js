// avançado em javascript

const frutas = ["maça","banana"]

//metodo unshift para adicionar um elemento e ficar em primeiro na lista


console.log(frutas)

frutas.unshift("Morango")

console.log(frutas)

//add um elemento padrao

frutas.push("Uva")

console.log(frutas)

//Usando o shift para remover o primeiro item

frutas.shift("")

console.log(frutas)
//remove o ultimo elemento
frutas.pop("")

console.log(frutas)

//map,filter,reduce -> arrow function

const Number = [1 ,2 ,3 ,4 ,5 , 6]

//find encotra apenas o primeiro elemento mas nao todos
const pairnumbers = Number.find((num) => num % 2 === 0)

console.log(pairnumbers)

//filter mesmo papel do find porem ele percorre todos os numeros
//Pair Numbers
const painumbers = Number.filter((sodezoas) => sodezoas % 2 === 0)

console.log(painumbers)

//manipulaçao de string 

//metodo trim retira os espaços da frente
const frase = "   Ola,Mundo!"

const palavra = frase.trim().split(" ")

console.log(frase)
console.log(palavra)

const frase2 = "javascript é incrivel"
//passe em valor boleano se a palavra que escreveu e um start
console.log(frase2.startsWith(""))

//mesma coisa mas mostra os valores finais

console.log(frase2.endsWith("incrivel")) //pega da ultima letra

//exceçoes e tratamentos de erros
/*
const idade = 152

 if(idade < 18) {
    //adicionar um erro personalizado por voce
     throw new Error("Voce deve ter pelomenos 18 anos")
    }
*/

//tentado tratar o error

try {
   const idade = 15
  if(idade < 18) {
    //adicionar um erro personalizado por voce
     throw new Error("Voce deve ter pelomenos 18 anos")
 }
} catch(error) {
    //.message so mostra a mensagem
    console.log(error.message)
}

//parei na parte 1:48:35