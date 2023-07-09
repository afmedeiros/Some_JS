// 5) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. 
// A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, 
// ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver,
//  ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria 
// de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.

let valorCompra, categoria, desconto
let descPremium = 20, descGold = 20, descSilver = 10
let frete = 12.50

    valorCompra = Number(prompt("Valor da compra: "))
    categoria = Number(prompt("1) Premium\n2) Gold\n3) Silver\n4) Não Assinante\n"))

    switch(categoria){

        case 1:

            desconto = valorCompra / 100* descPremium
            valorCompra = valorCompra - desconto
            alert(`Valor da compra: R$ ${valorCompra}.`)
            break

        case 2:

            desconto = valorCompra / 100* descGold
            valorCompra = valorCompra - desconto + frete
            alert(`Valor da compra: R$ ${valorCompra}.`)
            break

        case 3:

            desconto = valorCompra / 100* descSilver
            valorCompra = valorCompra - desconto + frete
            alert(`Valor da compra: R$ ${valorCompra}.`)
            break

        case 4:

            valorCompra = valorCompra + frete
            alert(`Valor da compra: R$ ${valorCompra}.`)
            break
        
        default:

            alert(`categoria inexistente!`)


    }

