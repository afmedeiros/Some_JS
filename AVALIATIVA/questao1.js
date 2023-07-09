let nome, idade, grauInstrucao, nivelIngles

//(1,0) Receber os dados do usuário. OK
//(1,0) Validar os dados e critérios para cada tipo de bolsa, ou caso não possa concorrer. OK
//(1,0) Mostrar mensagem com o nome do estudante e o tipo de bolsa que pode concorrer, ou mensagem de "não apto".

nome=prompt('Digite seu nome: ')
idade=Number(prompt('Digite sua idade: '))
grauInstrucao=prompt('Digite seu Grau de Instrução: ').toUpperCase()
nivelIngles=prompt('Digite seu Nível de Inglês: ').toUpperCase()
switch(true){

    case idade >=25 && idade <=60 && grauInstrucao=='SUPERIOR COMPLETO' && nivelIngles=='AVANÇADO':
    alert(`Olá ${nome}, você está apto a concorrer a vaga de MESTRADO!`)
    break

    case idade>=30 && idade <=70 && grauInstrucao=='MESTRADO COMPLETO' && nivelIngles=='FLUENTE':
    alert(`Olá ${nome}, você está apto a concorrer a vaga de DOUTORADO!`)
    break

    default: 
    alert(`Olá ${nome}, você não está apto a concorrer!`)
    break
}

//teste 1 - testado e validado
