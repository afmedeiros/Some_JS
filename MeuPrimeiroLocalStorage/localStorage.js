localStorage.setItem('numero', 10)

localStorage.setItem('idade', 20)

let idadeSalva

idadeSalva = localStorage.getItem('idade')
alert(idadeSalva)



let cor //exemplo caso não tenha sido setado nada para a chave

cor = localStorage.getItem('cores')

alert(cor) //vai dar null

