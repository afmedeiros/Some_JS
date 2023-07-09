// 1) Fazer um programa onde o usuário pode acessar as seguintes opções:

// A) Falar com a atendente B) Falar com o RH
// C) Falar com o gerente D) Sair

// Mostrar mensagens para cada opção!
// (DESAFIO: Fazer voltar para o menu quando digitar A, B ou C)

let opcao

Menu()

function Menu(){
    
    opcao = prompt("Digite o ramal: ").toUpperCase()

    switch(opcao){

    case "A":

        alert("Direcionado para o atendente!")
        Menu()
        break

    case "B":

        alert("Direcionado para o RH")
        Menu()
        break

    case "C":
        alert("Direcionado para o gerente")
        Menu()
        break

    case "D":

        alert("Sair")
        break

    default:
    
        alert("Digite a opção correta!")
        Menu()
        break
}
}