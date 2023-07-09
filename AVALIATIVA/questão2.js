// (1,0) Receber as notas da avaliação. OK
// (1,0) Calcular o índice do produto (média) com duas casas após a vírgula e mostrar na tela. OK
// (1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela.



let notaQualidade, notaCxb, notaDurabilidade, mediaNotas

notaQualidade=Number(prompt('Avalie a qualidade do produto: '))
notaCxb=Number(prompt('Avalie o custo benefício do produto: '))
notaDurabilidade=Number(prompt('Avalie a durabilidade do seu produto: '))

mediaNotas=((notaQualidade+notaCxb+notaDurabilidade)/3).toFixed(2)

switch(true){   

        case mediaNotas>9: //notar que colocou ACIMA de 9
        alert(`Sua média é de ${mediaNotas}, você terá destaque na página principal!`)
        break

        case mediaNotas <=9 && mediaNotas >=7: //notar que colocou na descrição entre 7 a 9
        alert(`Sua média é de ${mediaNotas}, você terá destaque na área promoções!`)
        break

        case mediaNotas <7 && mediaNotas >=5:  //notar que colocou na descrição entre 5 a 7 subentendi <7
        alert(`Sua média é de ${mediaNotas}, você terá destaque na página da categoria!`)
        break

        case mediaNotas <5: //poderia ser default, mas achei mais didático colocar assim.
        alert(`Sua média é de ${mediaNotas}, você não ganha destaque!`)
        break

}

//teste 1 - testado e validado
//teste 2 - AGUARRDANDO