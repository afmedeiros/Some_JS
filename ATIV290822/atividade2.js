let anoIdade

anoIdade=Number(prompt('Descubra a sua geração!\nDigite o ano de nascimento(YYYY): '))

switch(true){
    case anoIdade <= 1945:
    alert('Sem geração')
    break

    case anoIdade >= 1946 && anoIdade <= 1964:
    alert('Você é um Baby Boomer')
    break

    case anoIdade >= 1965 && anoIdade <= 1980:
    alert('Você é da Geração X')
    break
    
    case anoIdade >= 1981 && anoIdade <= 1996:
    alert('Você é da Geração Y ou Millennials')
    break

    case anoIdade >= 1997 && anoIdade <= 2010:
    alert('Você é da Geração Z')
    break

    case anoIdade >= 2011 && anoIdade <= 2022:
    alert('Você é da Geração Alfa')
    break

    default:
    alert('Cê é loko')
}