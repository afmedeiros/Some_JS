



function calculoNumero(){
    
     let calculo, variavel

   

    
        for(i=0; i<=250; i++){
        document.getElementById('divLista').innerHTML += 
        `${i}<BR>`
        
        if(i==250){
            document.getElementById('divLista').innerHTML += 
        (`MANHÊ,ACABEI O PRIMEIRO<br>`)
        }}


        for(i=250; i>99; i--){
            document.getElementById('divLista').innerHTML += 
        `${i}<BR>`
        if(i==100){
            document.getElementById('divLista').innerHTML += 
        (`MANHÊ,ACABEI O SEGUNDO<br>`)
        }}


        for(i=105; i>0; i){
        i = (i - 5)
        document.getElementById('divLista').innerHTML += 
        `${i}<BR>`            
        if(i==0){
            document.getElementById('divLista').innerHTML += 
        (`MANHÊ,ACABEI O TERCEIRO<br>`)

        }}

        for(i=0; i<9497; i){
            i = (i + 3)
            document.getElementById('divLista').innerHTML += 
            `${i}<BR>`            
             }
        document.getElementById('divLista').innerHTML += (`MANHÊ,ACABEI O QUARTO<br>`)
    



        
}
    


       
    

    
