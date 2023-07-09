

let numero, nome

    numero = Number(prompt("Digite um numero: "))
    nome = prompt("Digite seu nome: ")

    switch(numero){

        case 0:

            alert("Zero!")
            break

        case 5:

            alert("Cinco!")
            break

        case 10:

            alert("Dez!")
            break

        default:

            alert("Nenhum!")



    }

    switch(nome){

        case 'Astrogildo':

            alert("Astrogildo, presente!")
            break
            

         case 'Ursula':

            alert("Ursula, presente!")
            break

         case 'rodolfino':

            alert("rodolfino, presente!")
            break


        default:
            
            alert("Não confere!")

    }