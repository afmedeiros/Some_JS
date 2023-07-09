//1) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos/n
//do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma /n
//desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

let totalEleitores, candidato1, candidato2, votosBrancos, votosNulos, perc1, perc2, percBrancos, percNulos

totalEleitores = Number(prompt('Qual o total de eleitores? '))
candidato1 = Number(prompt('Canditato 1: '))
candidato2 = Number(prompt('Canditato 2: '))
votosBrancos = Number(prompt('Votos brancos: '))
votosNulos = Number(prompt('Votos nulos: '))


perc1 = candidato1 * 100 / totalEleitores
perc2 = candidato2 * 100 / totalEleitores
percBrancos = votosBrancos * 100 / totalEleitores
percNulos = votosNulos * 100 / totalEleitores




alert(`Candidato 1: ${perc1} %\nCandidato 2: ${perc2} %\nVotos brancos: ${percBrancos} %\nVotos Nulos: ${percNulos} % `)
