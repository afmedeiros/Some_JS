

function CalcularTempo(){

    let resultado = document.getElementById('divTempo')
    let distancia = Number(document.getElementById('inpDistancia').value)

    const velocidade = 300000
    let tempo = distancia/velocidade

    resultado.innerHTML=`Tempo de viagem : <br>${tempo.toFixed(2)} segundos`

        let minutos = tempo/60
        if(minutos>1){
            resultado.innerHTML+= `<br>${minutos.toFixed(2)} minutos`
    
        let horas = minutos/60
        if(horas>1){
            resultado.innerHTML += `<br>${horas.toFixed(2)} horas`

        let dias = horas/24
        if (dias>1){ 
            resultado.innerHTML += `<br>${dias.toFixed(2)} dias`
    
        let mes = dias/30
        if(mes>1){
            resultado.innerHTML += `<br> ${mes.toFixed(2)} meses`

        let ano = mes/12
       if(ano>1){
        resultado.innerHTML += `<br> ${ano.toFixed(2)} anos`
    }
    }
    }

    
    }

    }
}