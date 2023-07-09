// - Criem dois vetores de 30 posições, um para armazenar a mínima de cada dia e outro para a máxima; - OK

// - Usando a função Math.random(), gerem dois valores de temperatura para o dia. Estes valores devem estar entre 12 e 35 graus. - OK

// - De posse destes dois valores gerados, coloquem o menor no vetor de mínimas e o maior no vetor de máximas. - OK

// - Claro, este processo será repetido 30 vezes para “gerar” as temperaturas mínima e máxima de cada um dos 30 dias (30 dias no mês, 
//30 posições no vetor...) - OK

 

// Saídas do programa:

// - Para começo de conversa, uma lista contendo a mínima e a máxima temperatura de cada dia de Junho;

// - Tem mais, peraí...

 

// DLC 1: Qual foi a temperatura média em cada dia? - OK

// DLC 2: Qual foi a maior temperatura média registrada nesse mês? - OK

// DLC 3: É sabido nas altas rodas iluminatis da meteorologia que existe a regra de Von Fahrenkelvin. Esta regra (entre outras coisas 
//discutíveis) afirma que nenhuma temperatura máxima jamais será maior que o dobro da mínima deste mesmo dia. Verifique isto para cada um 
//dos dias registrados em nosso script e diga se o clã iluminati dos meteorologistas tem razão.



let vetorMinima=[]
let testeMinDobro = 0
let vetorMindobro = []
let vetorMaxima=[]
let n1 = 0
let vetorMedia=[]
let calcMedia = 0
let maiorMedia = 0
let diaMedia = 0
let calcDobro = "Não, os iluminatis estão certos"
let diaMinDobro = 0
let vetorDiaMD = []


for(i=0;i<30;i++){

    n1 = gerarNumero(12,35)
    n2 = gerarNumero(12,35)

    if(n1>n2){
        vetorMaxima.push(n1)
        vetorMinima.push(n2)
    }else{
        vetorMaxima.push(n2)
        vetorMinima.push(n1)
    }


    function gerarNumero(min, max) 
    {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


    calcMedia=(vetorMaxima[i]+vetorMinima[i])/2
        if(calcMedia>maiorMedia)
        {
            maiorMedia=calcMedia
            diaMedia = i+1
        }

vetorMedia.push(calcMedia)


testeMinDobro=(vetorMinima[i]*2)
vetorMindobro.push(testeMinDobro)

if(vetorMaxima[i]>vetorMindobro[i]) //verdade se a máxima for maior que o dobro da minima
{   
    calcDobro = "Não, iluminatis estão errados"
    diaMinDobro = i+1
    vetorDiaMD.push(diaMinDobro)
}


document.getElementById('divLista').innerHTML += (`No Dia ${i+1}: a mínima foi de ${vetorMinima[i]}°C e a máxima foi de ${vetorMaxima[i]}°C. A temperatura média foi ${vetorMedia[i]}°C <br>`)
document.getElementById('divMaior').innerHTML = (`<br><br> A maior média foi de ${maiorMedia}°C no dia ${diaMedia} <br>`)
document.getElementById('divVon').innerHTML = (`<br>É sabido nas altas rodas iluminatis da meteorologia que existe a regra de Von Fahrenkelvin. Esta regra (entre outras coisas 
    //discutíveis) afirma que nenhuma temperatura máxima jamais será maior que o dobro da mínima deste mesmo dia.<br><br> Resposta ${calcDobro} Nos dias ${vetorDiaMD} a temperatura máxima foi maior que o dobro da mínima! <br>`)
}
