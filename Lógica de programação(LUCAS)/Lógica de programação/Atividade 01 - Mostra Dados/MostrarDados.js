
//1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, /n
//mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]". /n
//Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

let nome, idade, nacionalidade, endereço

  nome = prompt("digite seu nome: ")
  idade = prompt("digite sua idade: ")
  nacionalidade = prompt("digite sua nacionalidade: ")
  endereço = prompt("digite o seu endereço: ")

 

alert(`Cliente ${nome} , com ${idade} anos, ${nacionalidade}, reside no endereço ${endereço}`)
