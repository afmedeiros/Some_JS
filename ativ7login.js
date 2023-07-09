let userName, passWord

userName=prompt('Digite seu username: ')
passWord=prompt('Digite sua senha: ')

if(userName=='admin' && passWord=='123'){

alert('Parabéns, acesso liberado!')

}if(userName!='admin' && passWord=='123'){

alert('Você errou o username!') 

}if(userName=='admin' && passWord!='123'){

    alert('Você errou o password!')

}else if(userName!='admin' && passWord!='123'){

    alert('Você errou o username e o password!')

}