//aqui a batata assou

//(1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
//(1,0) Validar para que respostas com letra minúscula (a, b, c, d) também somem os pontos.
//(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
//(1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (15 pontos), incluir "Parabéns!

let serieTematica, livroFantasia, franquiaNintendo, autorTerror, pontoST, pontoLF, pontoFN, pontoAT
pontoST=0
pontoLF=0
pontoFN=0
pontoAT=0

alert('>>> Bem vindo ao Quiz Geek! <<<\n\n Você deverá responder 4 perguntas, escolhendo a letra da resposta, ao fim do Quiz você saberá a sua pontuação Geek =)\n Clique em OK para começar! ')

serieTematica=prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series').toLowerCase()
livroFantasia=prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline').toLowerCase()
franquiaNintendo=prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?)\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros').toLowerCase()
autorTerror=prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley').toLowerCase()


    
    switch(true){

    case serieTematica==='a':
    pontoST=Number(pontoST+2);
    break  
    
    case serieTematica==='b':
    pontoST=Number(pontoST+3);    
    break  
   
    case serieTematica==='c':
    pontoST=Number(pontoST+2);
    break  
    
    case serieTematica==='d':
    pontoST=Number(pontoST+1);
    break  
            
    case livroFantasia==='a':
    pontoLF=Number(pontoLF+4);
    break  
    
    case livroFantasia==='b':
    pontoLF=Number(pontoLF+2);
    break  
    
    case livroFantasia==='c':
    pontoLF=Number(pontoLF+4);
    break  
    
    case livroFantasia==='d':
    pontoLF=Number(pontoLF+3);
    break  
    
    case franquiaNintendo==='a':
    pontoFN=Number(pontoFN+3);
    break  
    
    case franquiaNintendo==='b':
    pontoFN=Number(pontoFN+2);
    break  
   
    case franquiaNintendo==='c':
    pontoFN=Number(pontoFN+2);
    break  
    
    case franquiaNintendo==='d':
    pontoFN=Number(pontoFN+4);
    break  
    
    case autorTerror==='a':
    pontoAT=Number(pontoAT+4);
    break  
    
    case autorTerror==='b':
    pontoAT=Number(pontoAT+2);
    break  
    
    case autorTerror==='c':
    pontoAT=Number(pontoAT+3);
    break      
    
    case autorTerror==='d':
    pontoAT=Number(pontoAT+4); 
    break     
    
}
    pontos=Number(pontoST)+Number(pontoLF)+Number(pontoFN)+Number(pontoAT)



    alert(`Você fez ${pontos}`)   
    