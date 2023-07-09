// 1.1 DESCRIÇÃO DO PROBLEMA
// Depoimento do Cliente: “Sou dono de um parque de diversões e estou enfrentando um problema
// na minha banca de atirar a bola de meia nas latinhas. Eu inventei de criar moda e troquei as
// latinhas por alvos (com sensores eletrônicos tipo chaves de fim de curso – que são acionados
// pela batida da bolinha) e me dei mal. O meu sistema funciona da seguinte forma: quando o cara
// acerta um dos alvos, uma sirene é acionada indicando que ele acertou. O problema é que, se o
// atendente se distrai na hora em que o cara acerta, ele não sabe qual o alvo foi acertado e cada
// um dos alvos dá direito a um prêmio diferente. Esta situação está me causando diversos
// problemas, porque toda vez que o atendente olha pro lado o cara diz que acertou o que dá o
// melhor prêmio. A banca paga quatro prêmios diferentes: pirulito, cerveja, bicicleta e Uno 0km.
// Deste jeito eu vou à falência! Eu preciso urgente de uma adaptação no meu sistema que me avise
// qual o alvo que foi atingido. Pago quanto for preciso!”.
// Manha: A solução para o problema do cliente pode ser apresentar o alvo que foi atingido em um
// display de LCD. Os alvos do cliente funcionam como as teclas da placa McLab, cada vez que o
// cara acerta o alvo, é como se uma tecla fosse pressionada.

#define bt1 12
#define bt2 11
#define bt3 10
#define bt4 9

void setup(){

    pinMode(bt1, INPUT_PULLUP);
    pinMode(bt2, INPUT_PULLUP);
    pinMode(bt3, INPUT_PULLUP);
    pinMode(bt4, INPUT_PULLUP);
    Serial.begin(9600);

}

void loop(){

    if(digitalRead(bt1) == 0){
        
        Serial.print("\nVoce ganhou um pirulito");
        while(digitalRead(bt1) == 0){}

    }
    if(digitalRead(bt2) == 0){
        
        Serial.print("\nVoce ganhou uma cerveja");
        while(digitalRead(bt2) == 0){}

    }
    if(digitalRead(bt3) == 0){
        
        Serial.print("\nVoce ganhou uma bicicleta");
        while(digitalRead(bt3) == 0){}

    }
    if(digitalRead(bt4) == 0){
        
        Serial.print("\nVoce ganhou um veículo Uno 0km");
        while(digitalRead(bt4) == 0){}

    }

}