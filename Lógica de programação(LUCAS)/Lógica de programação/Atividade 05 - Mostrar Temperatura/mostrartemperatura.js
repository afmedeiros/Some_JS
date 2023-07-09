//5) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela.

let Celsius, Fahrenheit

Celsius = Number(prompt('Digite a temperatura em Celsius: '))

Fahrenheit = ((Celsius * 1.8) + 32). toFixed(2)

alert(`${Fahrenheit} ºF `)