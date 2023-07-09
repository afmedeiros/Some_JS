int secadora = 13;
int tempo = 100;

void setup()
{
  
  pinMode(secadora, OUTPUT);
	
}
void loop()
{
    delay(5);

    if(tempo > 0){
        tempo--;
        digitalWrite(secadora, 1);
    }else{
        digitalWrite(secadora, 0);
        
    }

}