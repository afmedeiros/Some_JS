//atividade 1 de 22 de agosto
let mediaNotas

notaUm=Number(prompt("Digite a sua primeira nota: "))
notaDois=Number(prompt("Digite a sua segunda nota: "))
notaTres=Number(prompt("Digite a sua terceira nota: "))

mediaNotas = ((notaUm+notaDois+notaTres)/3).toFixed(2)

    if (mediaNotas >=7){

        alert(`Aprovado ${mediaNotas}`)

    }else if(mediaNotas >=5&& mediaNotas <7){

        alert(`Recuperação! Sua média foi ${mediaNotas}`)

    
    }else if(mediaNotas<5){

        alert(`Reprovado! Sua média foi ${mediaNotas}`)}

