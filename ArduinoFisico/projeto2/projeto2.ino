// Depoimento do cliente: “Vocês fizeram há um tempo um timer para a minha secadora. Em
// princípio ele era só um timerzinho bem simplinho, depois vocês colocaram um LCD pra me
// mostrar quanto tempo faltava para acabar a secagem... agora, estou ficando mais exigente! Estou
// achando um saco ter que desligar e ligar o timer toda vez que tenho que secar roupas. Eu quero
// que, quando a secadora estiver desligada, um simples apertar de botão a ligue de volta.”.
// Restrição1: Utilizem como base para este projeto a adaptação feita no roteiro 5, onde vocês
// inseriram a função printf().



#define bt 12
#define bt1 10
#define led 11


void setup(){

    pinMode(bt, INPUT_PULLUP);
    pinMode(led, OUTPUT);
    Serial.begin(9600);

}

void loop(){

if(digitalRead(bt) == 0){
        
        digitalWrite(led, HIGH);
        while(digitalRead(bt) == 0){}

    }

if(digitalRead(bt1) == 0){
        
        digitalWrite(led, LOW);
         while(digitalRead(bt1) == 0){}

        
    }

}

// #include <Adafruit_LiquidCrystal.h>
// Adafruit_LiquidCrystal lcd_1(0);

// int tempo = 300
// int cooler

// void setup()
// {
//   lcd_1.begin(16, 2);
//   pinMode(13, OUTPUT);
  
// }

// void loop(){

//     delay(250);
    

//     if(tempo > 0){

//     lcd_1.clear();
//     lcd_1.print("Ligada!");
//     tempo --;
//     digitalWrite(secadora, 1);
    
//     }else{

//     digitalWrite(secadora, 0);
//     lcd_1.clear();
//     lcd_1.print("Desligada!");  

// }