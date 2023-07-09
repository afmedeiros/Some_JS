
// 5.23 - Um comerciante comprou um produto e quer vende-lo com lucro de 45% se o valor da compra for menor que 20,00; caso contrario,
// o lucro sera de 30%. Faça um programa que entre com o valor do produto e mostre o valor da venda. 

let calculo

function somaNumeros(){
    
    let inputum = Number(document.getElementById("num1").value)
    
   if(inputum <= 20){

    calculo = (inputum * 0.45) + inputum
   
   }else if(inputum > 20){

    calculo = (inputum * 0.30) + inputum
    
   }

   document.getElementById("divresultado").innerHTML = `Preço de venda R$ ${calculo}`
} 
 
 