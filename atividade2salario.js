//exercício 2 de 22 de agosto

salarioAnual=Number(prompt('Digite o seu salario anual: '))
pisoSalarial=Number(prompt('Digite o piso salarial mensal da sua categoria: '))

salarioMensal=(salarioAnual/12).toFixed(2)

if(salarioMensal>pisoSalarial){

    alert(`Seu salário mensal é de R$${salarioMensal}, você recebe acima do piso da categoria! ISSA`)

}if(salarioMensal==pisoSalarial){

    alert(`Seu salário mensal é de R$${salarioMensal}, você recebe igual ao piso da categoria! OKAY`)

}else if(salarioMensal<pisoSalarial){

    alert(`Seu salário mensal é de R$${salarioMensal}, você recebe menos que o piso da categoria! XATIADO`)

}