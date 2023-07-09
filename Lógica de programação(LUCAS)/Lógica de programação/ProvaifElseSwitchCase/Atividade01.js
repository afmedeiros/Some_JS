// >>>>>>>>>>>>>>>>>>> Atividade 1 (3,0) <<<<<<<<<<<<<<<<<<<

// O programa de bolsas de mestrado e doutorado na Europa está selecionando estudantes brasileiros para serem contemplados. Criar um sistema
// que receba os dados do estudante como pessoa (nome, idade, grau de instrução e nível de inglês) para sinalizar se ele pode concorrer às bolsas.
// Após receber os dados, mostrar o nome do estudante e mensagem para qual tipo de bolsa o estudante está apto a concorrer. Caso não esteja apto
// a concorrer a nenhuma das duas categorias de bolsas, mostrar mensagem de "Não apto a concorrer".

// Mestrado -> O estudante deve ter entre 25 e 60 anos, possuir grau de instrução "superior completo" e nível de inglês "avançado".
// Doutorado -> O estudante deve ter entre 30 e 70 anos, possuir grau de instrução "mestrado completo" e nível de inglês "fluente".


// Critérios de avaliação:

// (1,0) Receber os dados do usuário.
// (1,0) Validar os dados e critérios para cada tipo de bolsa, ou caso não possa concorrer.
// (1,0) Mostrar mensagem com o nome do estudante e o tipo de bolsa que pode concorrer, ou mensagem de "não apto".

let nome, idade, grau, ingles
let mestrado, doutorado

nome = prompt("Digite seu nome: ").toUpperCase()
idade = Number(prompt("Digite sua idade: "))
grau = prompt("Digite seu grau de instrução: ").toUpperCase()
ingles = prompt("Digite seu nível de inglês: ").toUpperCase()

    if(grau == "SUPERIOR COMPLETO" && ingles == "AVANÇADO" && idade >= 25 && idade <= 60){

        alert(`Senhorª ${nome}, voce esta concorrendo a bolsa de Mestrado!`)
        
    }else if(grau == "MESTRADO COMPLETO" && ingles == "FLUENTE" && idade >= 30 && idade <= 70){

        alert(`Senhorª ${nome}, voce esta concorrendo a bolsa de Doutorado!`)
    
    }else{

        alert(`Senhorª ${nome}, Não apto a concorrer!`)

    }
