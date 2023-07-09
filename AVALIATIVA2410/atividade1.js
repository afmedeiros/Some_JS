//Um parque aquático recém inaugurou uma das suas mais incríveis atrações: ComboLoco, um toboágua gigante. Para organização das filas, 
//resolveu separar em grupos de 10 pessoas por vez, onde as crianças tem preferência em relação aos adultos. Criar um sistema que simule 
//essa fila. Deve-se perguntar o nome e a idade de cada uma das 10 pessoas, caso seja criança (menor que 12 anos) vai para o início da fila,
// caso não seja criança, vai para o final da fila. Ao final, mostrar a fila com os nomes.

//Exemplo: João, 60 anos, chegou. Astrogildo, 67 anos chegou. Enzo, 10 anos, chegou. Alícia, 9 anos, chegou. Suzana, 25 anos, chegou.

//Fila: Alícia, Enzo, João, Astrogildo, Suzana

//Critérios de avaliação:

//(0,5) Receber nome e idade das pessoas. - OK
//(1,0) Adicionar no local correto (início ou fim) da fila. - OK 
//(0,5) Mostrar a lista completa com os nomes. - OK 

let addPessoa
let addIdade
let filaAdulto = []
let filaCrianca = []
let filaToda = []



for(i=0;i<10;i++){

    addPessoa = prompt('Digite o nome da pessoa:    ')
    addIdade = Number(prompt('Digite a idade da pessoa: '))

    //na questão está menor que 12
    if(addIdade<12){
        
        filaCrianca.push(addPessoa)

        
    }else{

        filaAdulto.push(addPessoa)

    }
    }


    filaToda = filaCrianca.concat(filaAdulto)
    alert(`Fila: ${filaToda}`)



    



