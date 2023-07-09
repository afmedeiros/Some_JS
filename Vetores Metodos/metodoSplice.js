//pode ser usado para excluir um ítem do vetor ou substituir um ítem por outro na mesma posição

users = ['Lucas', 'Tyfanny', 'Eva']



users.splice(1,1,'Bruno') // vai excluir o Tyfanny e colocar o Bruno no lugar - o primeiro 1 refere a Tifanny, o segundo 1 a quantidade de coisas a excluir e o terceiro é o que vai ser colocado no lugar)

alert(users)




EXEMPLO 2


users = ['Lucas', 'Tyfanny', 'Eva']
users.splice(1,1) // vai excluir a Tyfanny do vetor
//users[1] = 'Fernanda'
alert(users)


EXEMPLO 3

let users = ['Lucas', 'Tyfanny', 'Eva', 'Jao']

users.splice(1,1,'Hadda') //vai excluir na posição 1, 1 "casa" e colocar "Hadda" no lugar
    alert(users) 

    //vai retornar "Lucas, Hadda, Eva, Jao"


EXEMPLO 4

let users = ['Lucas', 'Tyfanny', 'Eva', 'Jao']
let userDelete, userPos

    userDelete = prompt('Qual user deseja deletar?')
    userPos = users.splice(userDelete,1)
   
    alert(users)



