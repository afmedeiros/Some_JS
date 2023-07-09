//(1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz. OK
//(1,0) Validar para que respostas com letra minúscula (a, b, c, d) também somem os pontos. OK
//(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos. OK
//(1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (15 pontos), incluir "Parabéns!" ALELUIA! 

let serieTematica, livroFantasia, franquiaNintendo, autorTerror, pontoST, pontoLF, pontoFN, pontoAT, pontos
pontoST=0
pontoLF=0
pontoFN=0
pontoAT=0
pontos=0


alert('>>> Bem vindo ao Quiz Geek! <<<\n\n Você deverá responder 4 perguntas, escolhendo a letra da resposta, ao fim do Quiz você saberá a sua pontuação Geek =)\n Clique em OK para começar! ')


serieTematica=prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series').toLowerCase()
    
    switch(serieTematica){

        case 'a':
        pontoST=Number(pontoST+2);
        break
    
        case 'b':
        pontoST=Number(pontoST+3);
        break    
   
        case 'c':
        pontoST=Number(pontoST+2);
        break
    
        case 'd':
        pontoST=Number(pontoST+1);
        break
        
        }

    if(pontoST==0)
    alert('Alternativa incorreta! Você somou 0 pontos!')
       
    
livroFantasia=prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline').toLowerCase()
    

    switch(livroFantasia){
            
        case 'a':
        pontoLF=Number(pontoLF+4);
        break
        
        case 'b':
        pontoLF=Number(pontoLF+2);
        break
        
        case 'c':
        pontoLF=Number(pontoLF+4);
        break
        
        case 'd':
        pontoLF=Number(pontoLF+3);
        break
        
        }

    if(pontoLF==0)
    alert('Alternativa incorreta! Você somou 0 pontos!')


franquiaNintendo=prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?)\n\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros').toLowerCase()
    
    switch(franquiaNintendo){
    
        case 'a':
        pontoFN=Number(pontoFN+3);
        break
        
        case 'b':
        pontoFN=Number(pontoFN+2);
        break
    
        case 'c':
        pontoFN=Number(pontoFN+2);
        break
        
        case 'd':
        pontoFN=Number(pontoFN+4);
        break

    }

        if(pontoFN==0)
        alert('Alternativa incorreta! Você somou 0 pontos!')
    

autorTerror=prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley').toLowerCase()
    
    switch(autorTerror){

        case 'a':
        pontoAT=Number(pontoAT+4);
        break
        
        case 'b':
        pontoAT=Number(pontoAT+2);
        break
        
        case 'c':
        pontoAT=Number(pontoAT+3);
        break
        
        case 'd':
        pontoAT=Number(pontoAT+4); 
        break

    }   

        if(pontoAT==0)
        alert('Alternativa incorreta! Você somou 0 pontos!')

    pontos=Number(pontoST)+Number(pontoLF)+Number(pontoFN)+Number(pontoAT)

    if(pontos==15){

        alert(`Parabéns, você fez ${pontos} pontos!!`)
    
    }else{

        alert(`Você fez ${pontos} pontos!`)  
    } 

    