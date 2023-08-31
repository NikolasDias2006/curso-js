const tit = document.querySelector(".tit")

// const nao deixa declarar outra variavel.
const x = "hello world"
//x = 1 dá erro

let y = "Hle"

console.log(y)


for (i=10;i > 0;i--) {
    console.log("teste "+i)
}


let i1 = 0

while(i1 <= 10) {
    console.log(i1)
    i1 ++
}

//arrow function,outro jeito de declarar uma function

/* const arrowtest = () =>alert("Ola,mundo") 

arrowtest() */

/*ao interagir com o ola mundo*/

tit?.addEventListener("click",function(prev) {
    tit.innerHTML += "tudo bom"
})

   


//parei na parte 1:01:00