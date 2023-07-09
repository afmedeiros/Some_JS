let opcao

Menu()

//usa a function para poder chamar novamente e daí "rodar" denovo o código
function Menu(){

opcao = prompt('Digite com quem deseja falar: \nA)Falar com a atendente\nB)Falar com o RH\nC)Falar com o gerente\nD)Sair').toUpperCase()

switch(opcao){

    case 'A':
        alert("Falar com a atendente!")
        Menu()
        break
    
    case 'B':
        alert("Falar com o RH!")
        Menu()
        break

    case 'C':
        alert("Falar com o gerente!")
        Menu()
        break

    case 'D':
        alert("Tchau meu chapaaaaaa")
        break

    default:
        Menu()
}
}
