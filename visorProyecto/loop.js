

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

    nove();
    delay(1000);
    oito();
    delay(1000);
    sete();
    delay(1000);
    seis();
    delay(1000);
    cinco();
    delay(1000);
    quatro();
    delay(1000);
    tres();
    delay(1000);
    dois();
    delay(1000);
    um();
    delay(1000);
    zero();
    delay(1000);


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





