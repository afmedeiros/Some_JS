//2) Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação.

let base, expoente, resultado

base = Number(prompt('Digite o número base: '))
expoente = Number(prompt('Digite o expoente: '))

resultado = base / expoente

alert (`Resultado: ${resultado}`)