// Link do Math.random

function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let vetor = []
vetor.push(gerarNumero(12, 35))
// ou
let n = gerarNumero(12, 35)
vetor.push(n)
// Clique no link https://www.w3schools.com/js/js_random.asp para abrir o recurso.

