

let frutasTotal = [], frutasIndividuais= [], frutasQuantidade = [], frutasAdicionadas = ''

while(frutasAdicionadas != 'cereja'){
    frutasAdicionadas=prompt('Qual fruta deseja adicionar?').toLowerCase()

    if(!frutasTotal.includes(frutasAdicionadas)){
        frutasIndividuais.push(frutasAdicionadas)
        
    }}