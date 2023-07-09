// C++ code
//

int tempo = 400;
// float numeroReal = 112.45;
bool logico = true

void setup()
{
  pinMode(9,OUTPUT); //Piscar 8 led's em sincronia(continuado)
  pinMode(8,OUTPUT);
  pinMode(7,OUTPUT); 
  pinMode(6,OUTPUT);
  pinMode(5,OUTPUT);
  pinMode(4,OUTPUT);
  pinMode(3,OUTPUT);
  pinMode(2,OUTPUT);
  
  
}


void loop()
{
  
  digitalWrite(2,0);
  digitalWrite(9,1);
  delay(tempo);
  digitalWrite(9,0);
  digitalWrite(8,1); 
  delay(tempo);  
  digitalWrite(8,0);
  digitalWrite(7,1);
  delay(tempo); 
  digitalWrite(7,0);
  digitalWrite(6,1);
  delay(tempo); 
  digitalWrite(6,0);
  digitalWrite(5,1);
  delay(tempo); 
  digitalWrite(5,0);
  digitalWrite(4,1);
  delay(tempo);
  digitalWrite(4,0);
  digitalWrite(3,1);
  delay(tempo);
  digitalWrite(3,0);
  digitalWrite(2,1);
  delay(tempo);
  
   
 
 
}