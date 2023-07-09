mesAno=prompt('Digite o Mês para saber a quantidade de dias: ').toLowerCase()

switch(mesAno){

    case 'janeiro':
    case '1':
    case 'março':
    case '3':
    case 'maio':
    case '5':
    case 'julho':
    case '7':
    case 'agosto':
    case '8':
    case 'outubro':
    case '10':
    case 'dezembro':
    case '12':      
    alert('Esse mês tem 31 dias!')
    break

    case 'fevereiro':
    case '2':
    alert('Esse mês tem 28 dias!')
    break

    case 'abril':
    case '4':
    case 'junho':
    case '6':
    case 'setembro':
    case '9':
    case 'novembro':
    case '11':
    alert('Esse mês tem 30 dias!')
    break


}