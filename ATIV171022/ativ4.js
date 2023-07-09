//4) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene 
//esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

// a) A quantidade de produtos com preço inferior a R$50;
// b) O nome dos produtos com preço de R$50 a R$100;
// c) A média dos preços dos produtos com preço superior a R$100.

let addProduto
let addPreco = 0
let vetorProduto = []
let vetorPreco = []
let qtdMenosCinquenta = 0
let vetorCC = []
let mediaPreco = 0
let qtdMaisCem = 0
let mediaQtd = 0

for(i=0;i<5;i++){

    addProduto=prompt('Digite o produto:    ')
    addPreco=Number(prompt('Digite o preço '))
    vetorProduto.push(addProduto)
    vetorPreco.push(addPreco)

    if(addPreco<50){

        qtdMenosCinquenta++
    }
    if(addPreco>=50&&addPreco<=100){

        vetorCC.push(addProduto)

    }
    if(addPreco>100){

        mediaPreco=mediaPreco+addPreco
        qtdMaisCem++
        
    }

}

mediaQtd=mediaPreco/qtdMaisCem

alert(qtdMenosCinquenta)
alert(vetorCC)
alert(mediaQtd)

