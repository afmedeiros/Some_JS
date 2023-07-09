// >>>>>>>>>>>>>>>>>> Atividade 3 (4,0) <<<<<<<<<<<<<<<<<<<<

// Desenvolver a lógica de respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 4 perguntas
//  com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica.

// 1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

// A) Van Helsing (2 pontos)
// B) Castlevania (3 pontos)
// C) The Vampire Diaries (2 pontos)
// D) Blade: The Series (1 ponto)


// 2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

// A) Alice no País das Maravilhas (4 pontos)
// B) O Hobbit (2 pontos)
// C) A Fantástica Fábrica de Chocolates (4 pontos)
// D) Coraline (3 pontos)


// 3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

// A) The Legend of Zelda (3 pontos)
// B) Kirby (2 pontos)
// C) Metroid (2 pontos)
// D) Super Mario Bros (4 pontos)


// 4) Quais dos autores citados, representam melhor o gênero de livros de terror?

// A) Stephen King (4 pontos)
// B) Edgar Allan Poe (2 pontos)
// C) H.P. Lovecraft (3 pontos)
// D) Mary Shelley (4 pontos)


// Critérios de avaliação:

// (1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
// (1,0) Validar para que respostas com letra minúscula (a, b, c, d) também somem os pontos.
// (1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
// (1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (15 pontos), incluir "Parabéns!"

let perg1, perg2, perg3, perg4, pontoFinal



alert(">>>O quiz doidãoooooo<<<\n\nO quiz contém 4 perguntas com 4 respostas cada.\n\nTodas as respostas possuem uma pontuação específica.\n\nDigite apenas uma opção!\n\nBoa Sorte!!!!")

perg1 = prompt(" 1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series").toUpperCase()

switch(true){
        
    case perg1 == "A":
    perg1 = 2
    break

    case perg1 == "B":
    perg1 = 3
    break

    case perg1 == "C":
    perg1 = 2
    break

    case perg1 == "D":
    perg1 = 1
    break

    default:
        perg1 = 0
        alert("0 pontos")
        break

}

perg2 = prompt(" 2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline").toUpperCase()
    
switch(true){

    case perg2 == "A":
    perg2 = 4
    break

    case perg2 == "B":
    perg2 = 2
    break

    case perg2 == "C":
    perg2 = 4
    break

    case perg2 == "D":
    perg2 = 3
    break
    
    default:
        perg2 = 0
        alert("0 pontos")
        break


}

perg3 = prompt(" 3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros").toUpperCase()

switch(true){

    case perg3 == "A":
    perg3 = 3
    break

    case perg3 == "B":
    perg3 = 2
    break

    case perg3 == "C":
    perg3 = 2
    break

    case perg3 == "D":
    perg3 = 4
    break

    default:
        perg3 = 0
        alert("0 pontos")
        break


}

perg4 = prompt(" 4) Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley").toUpperCase()



    switch(true){

        case perg4 == "A":
        perg4 = 4
        break

        case perg4 == "B":
        perg4 = 2
        break

        case perg4 == "C":
        perg4 = 3
        break

        case perg4 == "D":
        perg4 = 4
        break

        default:
            perg4 = 0
            alert("0 pontos")
            break


    }

    pontoFinal = perg1 + perg2 + perg3 + perg4

    switch(true){


        case pontoFinal == 15:
            alert(`Sua pontuação foi ${pontoFinal}, Parabéns!`)
            break

        default:
            alert(`Sua pontuação foi ${pontoFinal}.`)


    }
    