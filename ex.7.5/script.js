
    for(i=1; i<=500; i++){
        let valor = 0.33 * i
        document.getElementById('divLista').innerHTML += 
        `${i}: R$${valor.toFixed(2)}<BR>`
    }

