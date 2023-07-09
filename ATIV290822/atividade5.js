let valorCompra, vC1, vC2, vC3, vC4, assinante

var freteFixo=12.50

//1) Assinante Premium, ganha 20% de desconto e frete grátis 
//2) Assinante Gold, ganha 20% de desconto mas paga frete 
//3) Assinante Silver, ganha 10% de desconto mas paga frete. 
//4) Não assinante, sem benefícios. 
//Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). 
//Mostrar na tela o valor da compra de acordo com a opção escolhida.

valorCompra=Number(prompt('Digite o valor da sua compra:')).toFixed(2)
assinante=(prompt('Digite a sua categoria de assinante: '))
vC1=(valorCompra*0.8).toFixed(2)
vC2=((valorCompra*0.8)+freteFixo).toFixed(2)
vC3=((valorCompra*0.9)+freteFixo).toFixed(2)
vc4=(Number(valorCompra)+Number(freteFixo)).toFixed(2)

switch(assinante){

    case "1":
        
        alert(`Você é assinante Premium, sua compra saíra R$${vC1} e terá frete grátis`)
        break

    case "2":
        alert(`Você é assinante Gold, sua compra saíra R$${vC2}`)
        break

    case "3": 
        alert(`Você é assinante Silver, sua compra saíra R$${vC3}`)
        break

    case "4":
        alert(`Você não é assinante, sua compra saíra R$${vc4}`)
        break

}