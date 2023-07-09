



function calculoNumero(){
    
    let numero = (document.getElementById("calculoTab")).value
    
    let calculo

   

    for(i=0; i<=10; i++){

        calculo = i*numero
        document.getElementById('divLista').innerHTML +=  `${numero}x${i} = ${calculo}<BR>`

    }
    
}