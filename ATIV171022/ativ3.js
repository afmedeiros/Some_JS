//3) Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é 
//transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por 
//bactérias, doenças transmitidas por ambos, lista com todas doenças.


let qtdDoencas = 0
let addDoenca 
let addTransmissao 
let todasDoencas = []
let doencaVirus = []
let doencaBact = []
let doencaAmbos = []




qtdDoencas = Number(prompt('Quantas doenças deseja cadastrar?'))

for(i=0; i<qtdDoencas; i++){

addDoenca = prompt('Cadastre o nome da doença')

addTransmissao = (prompt('Forma de transmissão:  ')).toLowerCase()

if(addTransmissao == 'virus'){
   
        todasDoencas.push(addDoenca)
        doencaVirus.push(addDoenca)

}else if(addTransmissao == 'bacteria'){

        todasDoencas.push(addDoenca)
        doencaBact.push(addDoenca)
    
}else if(addTransmissao == 'ambos'){

        todasDoencas.push(addDoenca)
        doencaAmbos.push(addDoenca)
        
}
}


alert(`Doenças transmitidas por Vírus: ${doencaVirus}\nDoenças transmitidas por Bactéria: ${doencaBact}\nDoenças transmitidas por Ambos: ${doencaAmbos}\nLista com todas as doenças: ${todasDoencas}`)


