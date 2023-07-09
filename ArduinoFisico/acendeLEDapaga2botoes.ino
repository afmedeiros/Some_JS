#define bt1 5
#define bt2 7
#define led 13

int ligado = 0;

void setup() {
  
  pinMode(bt1, INPUT_PULLUP);
  pinMode(bt2, INPUT_PULLUP);
  pinMode(led, OUTPUT);
  Serial.begin(9600);

}

void loop() {
  if(digitalRead(bt1) == 0||digitalRead(bt2) == 0){
    if(ligado == 0){
      ligado = 1;
    }else{
      ligado = 0;
    }
     
    digitalWrite(led,ligado);

  while(digitalRead(bt1) == 0 || digitalRead(bt2) == 0){}
   
    }
     Serial.print(ligado);
    Serial.print("\n");
    delay(100);
  }



