let opcoes

opcoes=prompt('Digite com quem deseja falar: \nA)Falar com a atendente\nB)Falar com o RH\nC)Falar com o gerente\nD)Sair').toUpperCase()
switch(opcoes){
    case "A":
    alert('Estamos encaminhando você para uma atendente!')
    break

    case "B":
    alert('Estamos encaminhando você para o RH!')
    break

    case "C":
    alert('Estamos encaminhando você para o gerente!')   
    break

    case "D":
    alert('Você saiu')
    break

    default:
        (alert('>> Letra incorreta <<'))


}
//switch (case) - comparação simples(digita algo que vai direcionar para aquilo)
// switch(true) - criar comparaçoes para aquela variavel imputada. (digita algo e no switch vc compara por exemplo, uma idade que você compara gerações)