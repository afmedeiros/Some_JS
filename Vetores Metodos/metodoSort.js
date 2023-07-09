//Metodo sort() - ordena elementos de um vetor(0 a 9), o metodo de ordenação é ascendente (se quiser descendente tem que dar sorte e depois reverse() )

let numbers = [1,4,2,8,6,9,10,22,43]

    numbers.sort(compareNumbers)

   

    function compareNumbers(a, b)  //usa essa função para ele ordenar elementos além do 10 
    {
        return a - b;
    }

    alert(numbers)



//EXEMPLO 2

let colors = ['Red', 'Yellow','Blue','Brown','Green'] //ele verifica a primeira letra, depois a segunda e verifica também a primeira letra se é minusculo ou maiusculo.

colors.sort()

console.log(colors)


