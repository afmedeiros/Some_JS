//             0 1 2 3 4

let numeros = [7,3,8,7,9]
let idades = []
let nomes = []
//
let carros = ['Fox', 'Kwid', 'Opala']
let addNumero, addIdade, quantidade

    carros.push('Gol')
    alert(carros)
    
quantidade = Number(prompt("Quantidade: "))

for(i=0; i<quantidade; i++){

    addIdade=Number(prompt("Idade a adicionar   "))
    idades.push(addIdade)  //aqui o push faz adicionar a resposta no "addIdade"

}

idades.pop()//o pop faz remover a ultima
alert(idades)