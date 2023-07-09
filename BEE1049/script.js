let salario

function CalculoAumento(){

    let resultado = document.getElementById("novoSalario")
    let salario = (document.getElementById("calculoSal")).value
    document.getElementById("CalculoSal").value = ''
    document.getElementById("CalculoSal").focus()
    let salario2, reajuste
    

if(salario>0 && salario<=400){
    salario2=Number(salario)*1.15
    reajuste=salario2-salario
    resultado.innerHTML = `Você receberá um aumento de 15%.<br>Seu novo salário será de R$${salario2.toFixed(2)}.<br>R$${reajuste.toFixed(2)} de reajuste.`

}else if(salario>400 && salario<=800){
    salario2=Number(salario)*1.12
    reajuste=salario2-salario
    resultado.innerHTML = `Você receberá um aumento de 12%.<br>Seu novo salário será de R$${salario2.toFixed(2)}.<br>R$${reajuste.toFixed(2)} de reajuste.`

}else if(salario>800 && salario<=1200){
    salario2=Number(salario)*1.10
    reajuste=salario2-salario
    resultado.innerHTML = `Você receberá um aumento de 10%.<br>Seu novo salário será de R$${salario2.toFixed(2)}.<br>R$${reajuste.toFixed(2)} de reajuste.`

}else if(salario>1200 && salario <=2000){
    salario2=Number(salario)*1.07
    reajuste=salario2-salario
    resultado.innerHTML = `Você receberá um aumento de 7%.<br>Seu novo salário será de R$${salario2.toFixed(2)}.<br>R$${reajuste.toFixed(2)} de reajuste.`

}else if(salario>2000){
    salario2=Number(salario)*1.04
    reajuste=salario2-salario
    resultado.innerHTML = `Você receberá um aumento de 4%.<br>Seu novo salário será de R$${salario2.toFixed(2)}.<br>R$${reajuste.toFixed(2)} de reajuste.`
}
}
