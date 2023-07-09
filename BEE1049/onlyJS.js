let vertInvert, aveMami, carnOniv, onivHerb, insAne, hemaHerb, hemaOniv

vertInvert=(prompt('Digite se o animal é vertebrado ou invertebrado!')).toLowerCase()

if(vertInvert == 'vertebrado'){
    aveMami=(prompt('Digite se o animal é ave ou mamífero')).toLowerCase()
    if(aveMami == "ave"){
        carnOniv=(prompt('Digite se o animal é carnívoro ou onívoro!')).toLowerCase()
        if (carnOniv == "carnivoro"){
        alert('O animal é uma aguia') 
        }         

        if (carnOniv == "onivoro"){
            alert('O animal é uma pomba!')
        }
    else if(aveMami == "mamifero"){
        onivHerb=(prompt('Digite se o animal é onivoro ou herbivoro!'))
        if(onivHerb == 'onivoro'){
            alert('O animal é uma homem') 
            }         
    
        if (onivHerb='herbivoro'){
            alert('O animal é uma vaca!')
            }
    }
    }
}