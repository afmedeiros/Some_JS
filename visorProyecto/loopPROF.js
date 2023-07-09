
int tempo = 1000;
int cont = 0;
void setup()
{ 
    pinMode(2, OUTPUT); //acende o lado esq sup
    pinMode(3, OUTPUT); //acende o meio
    pinMode(4, OUTPUT); //acende o pixel
    pinMode(5, OUTPUT); //acende o ld direito sup
    pinMode(6, OUTPUT); //acende o inferior
    pinMode(7, OUTPUT); //acende o ld esq inf
    pinMode(8, OUTPUT); //acende o ld direito inf
    pinMode(9, OUTPUT); //acende o superior
}

void loop(){

    switch(cont){
    case 0: zero();
    break;
    case 1: um();
    break;
    case 2: dois();
    break;
    case 3: tres();
    break;
    case 4: quatro();
    break;
    case 5: cinco();
    break;
    case 6: seis();
    break;
    case 7: sete();
    break;
    case 8: oito();
    break;
    case 9: nove();
    break;
      }
      cont++
      delay(1000);
      if(cont>9) cont = 0

    


}
    
void nove()
    {
    digitalWrite(2,1);
    digitalWrite(3,1);
    digitalWrite(4,0);
    digitalWrite(5,1);
    digitalWrite(6,0);
    digitalWrite(7,0);
    digitalWrite(8,1);
    digitalWrite(9,1);
    
    }

void oito()
    {
        digitalWrite(2,1);
        digitalWrite(3,1);
        digitalWrite(4,0);
        digitalWrite(5,1);
        digitalWrite(6,1);
        digitalWrite(7,1);
        digitalWrite(8,1);
        digitalWrite(9,1);           
        
    }

void sete()
    {
        digitalWrite(2,0);
        digitalWrite(3,0);
        digitalWrite(4,0);
        digitalWrite(5,1);
        digitalWrite(6,0);
        digitalWrite(7,0);
        digitalWrite(8,1);
        digitalWrite(9,1);
    }

void seis()
    {
       
        digitalWrite(2,1);
        digitalWrite(3,1);
        digitalWrite(4,0);
        digitalWrite(5,1);
        digitalWrite(6,1);
        digitalWrite(7,1);
        digitalWrite(8,0);
        digitalWrite(9,1);
    }

void cinco()
    {

        
        digitalWrite(2,1);        
        digitalWrite(3,1);
        digitalWrite(4,0);
        digitalWrite(5,1);
        digitalWrite(6,1);
        digitalWrite(7,0);
        digitalWrite(8,0);
        digitalWrite(9,1);
    }

void quatro()
    {
        digitalWrite(2,1);         
        digitalWrite(3,1); 
        digitalWrite(4,0);
        digitalWrite(5,1);
        digitalWrite(6,0);
        digitalWrite(7,0);
        digitalWrite(8,1);
        digitalWrite(9,0);
    }


void tres()
    { 
        digitalWrite(2,0); 
        digitalWrite(3,1);
        digitalWrite(4,0); 
        digitalWrite(5,1);
        digitalWrite(6,1);
        digitalWrite(7,0); 
        digitalWrite(8,1);   
        digitalWrite(9,1); 
    }

void dois()
    {
        digitalWrite(2,0);
        digitalWrite(3,1); 
        digitalWrite(4,0); 
        digitalWrite(5,0);
        digitalWrite(6,1);
        digitalWrite(7,1);
        digitalWrite(8,1);
        digitalWrite(9,1);
                             
    }

void um()
    {
        digitalWrite(2,0); 
        digitalWrite(3,0);
        digitalWrite(4,0); 
        digitalWrite(5,1);
        digitalWrite(6,0);
        digitalWrite(7,0); 
        digitalWrite(8,1);   
        digitalWrite(9,0); 
                        
    }

void zero()
    {
        digitalWrite(2,1);
        digitalWrite(3,0);
        digitalWrite(4,1);
        digitalWrite(5,1);
        digitalWrite(6,1);
        digitalWrite(7,1);
        digitalWrite(8,1);
        digitalWrite(9,1);           
        
    }





