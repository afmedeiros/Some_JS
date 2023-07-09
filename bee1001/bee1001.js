let varA, varB, varX

//varA=Number(prompt('Digite o número A: '))
//varB=Number(prompt('Digite o número B: '))
function CalcularEx1001(){
//ler o A
let varA=Number(document.getElementById('inpA').value)
//ler o B
let varB=Number(document.getElementById('inpB').value)
//calcular o X
varX=varA+varB
//mostrar o X
document.getElementById("inpX").innerHTML=`X=${varX}`

}
