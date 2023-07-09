// >>>>>>>>>>>>>>>>>> Atividade 2 (3,0) <<<<<<<<<<<<<<<<<<<<

// No site Mercado Livre, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado 
// pelo algoritmo para definir se o produto deve ou não ganhar destaque, como na página principal, na página da categoria daquele produto,
// na página de promoções ou se não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade 
// do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional switch / case, que receba essas avaliações 
// do comprador (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto 
// e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice entre 5 a 7 (destaque na página da categoria), índice 
// entre 7 a 9 (destaque em promoções), índice acima de 9 (destaque na página principal).


// Critérios de avaliação:

// (1,0) Receber as notas da avaliação.
// (1,0) Calcular o índice do produto (média) com duas casas após a vírgula e mostrar na tela.
// (1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela.

let qualidade, custoBeneficio, durabilidade, indice

qualidade = Number(prompt(">>>Teste de qualidade<<<\n\nDigite uma nota de 0 a 10 referente a qualidade do produto: "))
custoBeneficio = Number(prompt("Digite uma nota de 0 a 10 referente ao custo e beneficio: "))
durabilidade = Number(prompt("Digite uma nota de 0 a 10 referente a durabilidade do produto: "))

indice = ((qualidade + custoBeneficio + durabilidade)/3).toFixed(2)

    switch(true){

        case indice < 5:
            alert(`Índice do produto ${indice}, Não ganha destaque!`)
            break

        case indice >= 5 && indice <= 7:
            alert(`Índice do produto ${indice}, Destaque na página da categoria!`)
            break

        case indice > 7 && indice <= 9:
            alert(`Índice do produto ${indice}, Destaque em promoções!`)
            break

        default:
            alert(`Índice do produto ${indice}, Destaque na página principal!`)
            break




    }