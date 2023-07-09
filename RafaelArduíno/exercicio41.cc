#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

void setup()
{
  lcd_1.begin(16, 2);
  pinMode(13,OUTPUT);
  pinMode(7,OUTPUT);
  pinMode(2,OUTPUT);
}

void loop()
{
    lcd_1.clear();
    lcd_1.print("PORTA LOGICA E:");
    lcd_1.setCursor(3,1);
    lcd_1.print("F E F = F");
    delay(500);

    lcd_1.setCursor(3,1);
    lcd_1.print("F E V = F");
    digitalWrite(7,1);
    delay(500);

    lcd_1.setCursor(3,1);
    lcd_1.print("V E F = F");
    digitalWrite(7,0);
    digitalWrite(13,1);
    delay(500);

    lcd_1.setCursor(3,1);
    lcd_1.print("V E V = V");
    digitalWrite(7,1);
  	digitalWrite(2,1);
    delay(500);
  
    digitalWrite(7,0);
    digitalWrite(13,0);
  	digitalWrite(2,0);
/////////////////////////////////////////////
    lcd_1.clear();
    lcd_1.print("PORTA LOGICA OU:");
    lcd_1.setCursor(3,1);
    lcd_1.print("F OU F = F");
    delay(500);

    lcd_1.setCursor(3,1);
    lcd_1.print("F OU V = V");
    digitalWrite(7,1);
  	digitalWrite(2,1);
    delay(500);

    lcd_1.setCursor(3,1);
    lcd_1.print("V OU F = V");
    digitalWrite(7,0);
    digitalWrite(13,1);
 	digitalWrite(2,1);
  
    delay(500);

    lcd_1.setCursor(3,1);
    lcd_1.print("V OU V = V");
    digitalWrite(7,1);
    delay(500);
  
  digitalWrite(7,0);
  digitalWrite(13,0);
  digitalWrite(2,0);
}