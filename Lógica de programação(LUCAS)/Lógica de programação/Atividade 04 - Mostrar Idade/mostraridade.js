//4) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)/n
//e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.

let anoNascimento, anoAtual, idadeUsuario, mesesUsuario, diasUsuario, semanasUsuario

anoNascimento = Number(prompt('Insira o ano do seu nascimento (YYYY) '))
anoAtual = Number(prompt('Insira o ano atual (YYYY) '))

idadeUsuario = anoAtual - anoNascimento
mesesUsuario = idadeUsuario * 12
diasUsuario = mesesUsuario * 30
semanasUsuario = idadeUsuario * 52

alert(`A idade do usuario é ${idadeUsuario} anos, são ${mesesUsuario} meses, totalizando ${diasUsuario} dias, e ao total ${semanasUsuario} semanas`)