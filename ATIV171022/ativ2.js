//2) Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao 
//usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve 
//alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, 
//mostrar “Não houve alistamento nos últimos 10 anos”

let ano = 2000
let pergunta
let resposta = 0
let vetorAnos = []

for(i=2000;i<=2009;i++){
    pergunta=prompt(`No ano de ${i} teve alistamento?   `).toLowerCase()
    if(pergunta === 's'){
        resposta = i
        vetorAnos.push(resposta)
    }

}
if(resposta == 0){
    resposta = 'Não houve alistamento nos últimos 10 anos'
}

alert(`O último ano de alistamento foi: ${resposta}, houveram alistamento também em ${vetorAnos}`)