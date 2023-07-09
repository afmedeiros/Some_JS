let multa, somaMultas, pontos, somaPontos, qtdMultas

qtdMultas=Number(prompt('Digite a quantidade de multas:         '))

for(i=0; i<qtdMultas;i++){

    multa = Number(prompt('Valor da multa:'))
    somaMultas += multa
    pontos = Number(prompt('Pontos da multa:    '))
    somaPontos += pontos
}

alert(` você levou ${qtdMultas} multas que custarão ${somaMultas} totalizando ${somaPontos}`)