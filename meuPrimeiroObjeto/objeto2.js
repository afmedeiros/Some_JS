let carros = []
let marcaAdd, anoAdd, corAdd

let objCarro= {

    marca: '',
    ano: '',
    cor: ''
}




for(i=0;i<3;i++){

    marcaAdd = prompt ('Digite a marca: ')
    objCarro.marca = marcaAdd

    anoAdd = prompt ('Digite o ano: ')
    objCarro.ano = anoAdd

    corAdd = prompt ('Digite a cor: ')
    objCarro.cor = corAdd

    carros.push(Object.values(objCarro))


}

alert(carros)