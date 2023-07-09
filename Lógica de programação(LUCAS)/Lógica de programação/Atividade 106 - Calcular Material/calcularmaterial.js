// 6) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel\n
// rendem R$3,00 e cada 50kg de metal rendem R$5,00. /n
// Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. (JS)

let plastico, papel, metal, somaPlastico, somaPapel, somaMetal

plastico = Number(prompt('Digite a quantidade de plastico: '))
papel = Number(prompt('Digite a quantidade de papel: '))
metal = Number(prompt('Digite a quantidade de metal: '))

somaPlastico =(plastico * 0.20). toFixed(2)
somaPapel = (papel * 0.10). toFixed(2)
somaMetal = (metal * 0.10). toFixed(2)

alert (`Voce recebera pelo plastico: R$${somaPlastico}. \nVoce recebera pelo papel: R$${somaPapel}. \nVoce recebra pelo metal: R$${somaMetal}. `)