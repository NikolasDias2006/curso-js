let num = document.querySelector("input#num")

let lista = document.getElementById|("lista")

let res = document.querySelector("div#res")

let vetores = []

function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100) {
    return true
   } else {
    return false
   }
}

function lislista(n,l) {
 if(l.indexOf(Number(n) != -1))
  {
    return true
  } else {
    return false
  }
}

function add() {
if(isNumero(num.value) && lislista(num.value,vetores)){
        alert("tudo ok")
    } else {
        alert("A algo de errado,nao pode repetir o mesmo numero,deve ser numeros entre 1 a 100 e nao pode deixar nada em branco.")
    }
} 
