let frutas = []
let qtd = []

function colocar(){
    fruta=prompt('Fruta?')
    let indice = frutas.indexOf(fruta)

    if(indice != -1){
        qtd[indice]++
    }else{
        frutas.push(fruta)
        qtd[frutas.indexOf(fruta)] = 1
    }
}while(fruta != "Cereja")