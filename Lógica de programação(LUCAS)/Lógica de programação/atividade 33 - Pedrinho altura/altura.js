let alturaJoaozinho = 1.75
let alturaPedrinho = 1.60
let crescJoaozinho = 0.01
let crescPedrinho = 0.03
let ano = 0

while(alturaPedrinho < alturaJoaozinho){

    alturaPedrinho += crescPedrinho
    alturaJoaozinho += crescJoaozinho
    ano++

}

alert(`demorara ${ano} anos`)