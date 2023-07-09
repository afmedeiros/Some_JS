//O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 
//8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude 
//em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois 
//corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.

//perguntar quanto ira escalar por dia

let acampamentoBase = 5360
let cumeEverest = 8848
let altitudeFinal = cumeEverest - acampamentoBase
let dias = 0
let somaAltitudes = 0
let addAltitude

//usa o || (ouou) abaixo pq se uma das condições for verdadeiras, vai rodar

while(somaAltitudes < altitudeFinal || dias <8){

    addAltitude = Number(prompt("Subiu quanto hoje, doido?"))
    somaAltitudes = somaAltitudes + addAltitude
    dias++
    
}

if(dias == 8){

    alert('Volte! Urgente! VOAAA!')

}else{

    alert(`Parabéns! bora biLL! Foram apenas ${dias} dias`)
}


alert(altitudeFinal)