// 3) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso/n
// o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. /n
// Elaborar um programa no qual você deve digitar quantos /n
// casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. (JS)

let areaCasal, casal, solteiro, areaSolteiro

casal = Number(prompt('Quantos casais de leoes? '))
solteiro = Number(prompt('Quantos leoes solteiro? '))

areaCasal = casal * 400
areaSolteiro = solteiro * 320

alert (`${casal} casais, total de area dominada ${areaCasal} km. \n${solteiro} solteiro, total de area dominada ${areaSolteiro} km. `)

