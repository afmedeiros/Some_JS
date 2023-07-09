// 2) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal \n
// do funcionário e dizer se ele recebe de acordo com o piso (salário mensal igual ou maior que o piso da categoria) ou se recebe abaixo do piso.

let salarioAnual, pisoSalarial, salarioMensal

salarioAnual = Number(prompt('Digite seu salario anual: '))
pisoSalarial = Number(prompt('Digite o piso salarial: '))

salarioMensal = (salarioAnual / 12).toFixed(2)

if(salarioMensal >= pisoSalarial){

        alert(`Voce recebe de acordo com o piso salarial da sua profissao! \nSeu salario mensal é ${salarioMensal}`)

}else

        alert(`Voce recebe abaixo do piso salarial da sua profissao! \nSeu salario mensal é ${salarioMensal}`)