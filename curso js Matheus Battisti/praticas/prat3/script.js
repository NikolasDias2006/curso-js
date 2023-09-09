const h1 = document.querySelector("#h1")

const link = document.querySelector("a")

//1 seg para aparecer a mensagem
setTimeout(() => {
    h1.textContent = "ola,tudo bom"
},1000)

//add um video
link.setAttribute("href","https://www.youtube.com/watch?v=OYPbr6ZG3pc&t=8361s")

//add um blank para nao sair do site
link.setAttribute("target","_blank")
//manipulaçao de classes do css


const elemento = document.querySelector("#meuid")

//add ou pode fazer tambem

elemento.classList.add("minhaclasse")

//se a classe nao existir o toggle irá add ser ela existir o toggle irá remover
elemento.classList.toggle("minhaclasse")

//parei na parte 2:34:29