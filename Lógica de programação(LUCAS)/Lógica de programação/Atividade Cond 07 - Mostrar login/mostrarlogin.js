// 7) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123".\n
//  Perdir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem \n
// "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

let user = 'admin', pass = '123'
let userLogin, passLogin

    userLogin = prompt('Digite o username: ')
    passLogin = prompt('Digite a senha: ')

    if(userLogin == user && passLogin == pass){

        alert(`Login efetuado!`)

    }else{

        alert(`Login falhou!`)

    }