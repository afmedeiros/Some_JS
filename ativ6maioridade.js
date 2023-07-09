let pessoaUm, pessoaDois, pessoaTres, pessoaQ, pessoaC, mediaIdade, idadePum
pessoaUm=prompt('Digite o nome da pessoa: ')
idadePum=Number(prompt(`Digite a idade de ${pessoaUm}: `))
pessoaDois=prompt('Digite o nome da pessoa 2: ')
idadePdo=Number(prompt(`Digite a idade de ${pessoaDois}`))
pessoaTres=prompt('Digite o nome da pessoa 3: ')
idadePtr=Number(prompt(`Digite a idade de ${pessoaTres}`))
pessoaQ=prompt('Digite o nome da pessoa 4: ')
idadePqu=Number(prompt(`Digite a idade de ${pessoaQ}`))
pessoaC=prompt('Digite o nome da pessoa 5: ')
idadePci=Number(prompt(`Digite a idade ${pessoaC}`))

mediaIdade=(idadePum+idadePdo+idadePtr+idadePqu+idadePci)/5

idadePumX=150-idadePum
idadePdoX=150-idadePdo
idadePtrX=150-idadePtr
idadePquX=150-idadePqu
idadePciX=150-idadePci

    if(idadePumX<idadePdoX && idadePumX<idadePtrX && idadePumX<idadePquX && idadePumX<idadePciX){

        alert(`A maior idade é ${idadePum}`)
    }
    if(idadePdoX<idadePumX && idadePdoX<idadePtrX && idadePdoX<idadePquX && idadePdoX<idadePciX){

        alert(`A maior idade é ${idadePdo}`)
    }
    if(idadePtrX<idadePumX && idadePtrX<idadePdoX && idadePtrX<idadePquX && idadePtrX<idadePciX){

        alert(`A maior idade é ${idadePtr}`)
    }
    if(idadePquX<idadePumX && idadePquX<idadePdoX && idadePquX<idadePtrX && idadePtrX<idadePciX){

        alert(`A maior idade é ${idadePqu}`)
    }
    if(idadePciX<idadePumX && idadePciX<idadePdoX && idadePciX<idadePtrX && idadePciX<idadePquX){

        alert(`A maior idade é ${idadePci}`)
    }
