

var gameState="start";
var gameState2="q1"
var a1,a2,a3,a4;
var next1,next2,next3,next4,next5,next6,next7,next8,next9,finish;
var score=0;
function preload(){
easyI=loadImage("e.png")
diffI=loadImage("d.png")
}
function setup(){
 // var background=createSprite(200,200,50,50);
//background.setAnimation("court_1");
createCanvas(400,400)

 difficulty=createSprite(200,100,50,50);
difficulty.addImage(diffI);

 easy=createSprite(300,125,50,50);
 easy.addImage(easyI);

}


function draw() {
  background("black")
  text("Score :" + score ,50,50);
  
   drawSprites();
  console.log(gameState);
  if(mousePressedOver(easy)){
    gameState="easy";
  }
 
  
  if(gameState==="easy" && gameState2=="q1"){
    //background.setAnimation("easy1");
    easy.x=-50
    easy.y=-50
    E_q1();
   
  }
  // Easy1
if (mousePressedOver(a1)||mousePressedOver(a3)||mousePressedOver(a4)){
if(gameState2=="q1"){
 
  gameState="wanswer"
  back();
  console.log(gameState2)
  console.log(gameState);
}
}
if(mousePressedOver(a2)&&gameState2=="q1"){
  
    gameState="ranswer"
    back();
    score=score+1
    text("score=1")
}
if (gameState=="wanswer"&& gameState2=="q1"){
 fill("red")
  text("Wrong answer",150,200) 
  console.log("wrong");
  next1=createSprite(300,350,100,30)
  text('Next',270,360)
  next1.shapeColor="lightblue"
  console.log(gameState);
    console.log(gameState2);

}
if (gameState=="ranswer"&& gameState2=="q1"){
  console.log("ranswer")
  fill("green")
  text("Right answer",150,200)
  score=score+1

  next1=createSprite(300,350,100,30)
  text('Next',270,360)
  next1.shapeColor="lightblue"
}
if(mousePressedOver(next1)&& gameState2=="q1"){
  back();
   
    gameState="easy"
    gameState2="q2"
    
    
  }
   // Easy2
if (gameState==="easy"&&gameState2=="q2"){
  
  E_q2();

}
if(mousePressedOver(a1)||mousePressedOver(a3)||mousePressedOver(a4)){
  if(gameState2=="q2"){
 
 
  gameState="wanswer"
  back();
  }
}
if(mousePressedOver(a2)&&gameState2=="q2"){
  
    gameState="ranswer"
    back();
    score=score+1
}

if (gameState=="wanswer"&&gameState2=="q2"){
  fill("red")
   text("Wrong answer",150,200) 
 
   next2=createSprite(300,350,100,30)
   text('Next',270,360)
   next2.shapeColor="lightblue"
 
 }
 if (gameState=="ranswer"&&gameState2=="q2"){
   console.log("ranswer")
   fill("green")
   text("Right answer",150,200)
   score=score+1
 
   next2=createSprite(300,350,100,30)
   text('Next',270,360)
   next2.shapeColor="lightblue"
 }
 
if(mousePressedOver(next2)&& gameState2=="q2"){
  back();
   
    gameState="easy"
    gameState2="q3"
   
    
  }
   // Easy3
if (gameState==="easy"&&gameState2=="q3"){
  E_q3();

}
if(mousePressedOver(a1)||mousePressedOver(a3)||mousePressedOver(a4)){
  if(gameState2=="q3"){
 
 
  gameState="wanswer"
  score=score+1

  back();
  }
}
if(mousePressedOver(a2)&&gameState2=="q3"){
  
    gameState="ranswer"
    back();
    score=score+1
}

if (gameState=="wanswer"&&gameState2=="q3"){
  fill("red")
   text("Wrong answer",150,200) 
 
   next3=createSprite(300,350,100,30)
   text('Next',270,360)
   next3.shapeColor="lightblue"
 
 }
 if (gameState=="ranswer"&&gameState2=="q3"){
   console.log("ranswer")
   fill("green")
   text("Right answer",150,200)
   score=score+1
   next3=createSprite(300,350,100,30)
   text('Next',270,360)
   next3.shapeColor="lightblue"
 }
 
if(mousePressedOver(next3)&& gameState2=="q3"){
  back();
   
    gameState="easy"
    gameState2="q4"
    
   
    
  }
   // Easy4
  if (gameState==="easy"&&gameState2=="q4"){
    E_q4();
  
  }
  if(mousePressedOver(a1)||mousePressedOver(a2)||mousePressedOver(a4)){
    if(gameState2=="q4"){
   
   
    gameState="wanswer"
  
    back();
    }
  }
  if(mousePressedOver(a3)&&gameState2=="q4"){
    
      gameState="ranswer"
      back();
      score=score+1
  }
  
  if (gameState=="wanswer"&&gameState2=="q4"){
    fill("red")
     text("Wrong answer",150,200) 
   
     next4=createSprite(300,350,100,30)
     text('Next',270,360)
     next4.shapeColor="lightblue"
   
   }
   if (gameState=="ranswer"&&gameState2=="q4"){
     console.log("ranswer")
     fill("green")
     text("Right answer",150,200)
     score=score+1
     next4=createSprite(300,350,100,30)
     text('Next',270,360)
     next4.shapeColor="lightblue"
   }
   
  if(mousePressedOver(next4)&& gameState2=="q4"){
    back();
     
      gameState="easy"
      gameState2="q5"
     }


 // Easy5
    if (gameState==="easy"&&gameState2=="q5"){
      E_q5();
    
    }
    if(mousePressedOver(a3)||mousePressedOver(a2)||mousePressedOver(a4)){
      if(gameState2=="q5"){
     
     
      gameState="wanswer"
    
      back();
      }
    }
    if(mousePressedOver(a1)&&gameState2=="q5"){
      
        gameState="ranswer"
        back();
        score=score+1
    }
    
    if (gameState=="wanswer"&&gameState2=="q5"){
      fill("red")
       text("Wrong answer",150,200) 
     
       next5=createSprite(300,350,100,30)
       text('Next',270,360)
       next5.shapeColor="lightblue"
     
     }
     if (gameState=="ranswer"&&gameState2=="q5"){
       console.log("ranswer")
       fill("green")
       text("Right answer",150,200)
       score=score+1
       next5=createSprite(300,350,100,30)
       text('Next',270,360)
       next5.shapeColor="lightblue"
     }
     
    if(mousePressedOver(next5)&& gameState2=="q5"){
      back();
       
        gameState="easy"
        gameState2="q6"
       
        
      }
  
 
  // Easy6
      if (gameState==="easy"&&gameState2=="q6"){
        E_q6();
      
      }
      if(mousePressedOver(a3)||mousePressedOver(a2)||mousePressedOver(a4)){
        if(gameState2=="q6"){
       
       
        gameState="wanswer"
        score=score+1
      
        back();
        }
      }
      if(mousePressedOver(a1)&&gameState2=="q6"){
        
          gameState="ranswer"
          back();
      }
      
      if (gameState=="wanswer"&&gameState2=="q6"){
        fill("red")
         text("Wrong answer",150,200) 
       
         next6=createSprite(300,350,100,30)
         text('Next',270,360)
         next6.shapeColor="lightblue"
       
       }
       if (gameState=="ranswer"&&gameState2=="q6"){
         console.log("ranswer")
         fill("green")
         text("Right answer",150,200)
         score=score+1
         next6=createSprite(300,350,100,30)
         text('Next',270,360)
         next6.shapeColor="lightblue"
       }
       
      if(mousePressedOver(next6)&& gameState2=="q6"){
        back();
         
          gameState="easy"
          gameState2="q7"
         
          
        }
 // Easy7
        if (gameState==="easy"&&gameState2=="q7"){
          E_q7();
        
        }
        if(mousePressedOver(a3)||mousePressedOver(a2)||mousePressedOver(a4)){
          if(gameState2=="q7"){
         
         
          gameState="wanswer"
          score=score+1
        
          back();
          }
        }
        if(mousePressedOver(a1)&&gameState2=="q7"){
          
            gameState="ranswer"
            back();
        }
        
        if (gameState=="wanswer"&&gameState2=="q7"){
          fill("red")
           text("Wrong answer",150,200) 
         
           next7=createSprite(300,350,100,30)
           text('Next',270,360)
           next7.shapeColor="lightblue"
         
         }
         if (gameState=="ranswer"&&gameState2=="q7"){
           console.log("ranswer")
           fill("green")
           text("Right answer",150,200)
           score=score+1
           next7=createSprite(300,350,100,30)
           text('Next',270,360)
           next7.shapeColor="lightblue"
         }
         
        if(mousePressedOver(next7)&& gameState2=="q7"){
          back();
           
            gameState="easy"
            gameState2="q8"
           
            
          }
           // Easy8

          if (gameState==="easy"&&gameState2=="q8"){
            E_q8();
          
          }
          if(mousePressedOver(a1)||mousePressedOver(a2)||mousePressedOver(a4)){
            if(gameState2=="q8"){
           
           
            gameState="wanswer"
            score=score+1
          
            back();
            }
          }
          if(mousePressedOver(a3)&&gameState2=="q8"){
            
              gameState="ranswer"
              back();
          }
          
          if (gameState=="wanswer"&&gameState2=="q8"){
            fill("red")
             text("Wrong answer",150,200) 
           
             next8=createSprite(300,350,100,30)
             text('Next',270,360)
             next8.shapeColor="lightblue"
           
           }
           if (gameState=="ranswer"&&gameState2=="q8"){
             console.log("ranswer")
             fill("green")
             text("Right answer",150,200)
             score=score+1
             next8=createSprite(300,350,100,30)
             text('Next',270,360)
             next8.shapeColor="lightblue"
           }
           
          if(mousePressedOver(next8)&& gameState2=="q8"){
            back();
             
              gameState="easy"
              gameState2="q9"
             
              
            }
             // Easy9
          
              if (gameState==="easy"&&gameState2=="q9"){
                E_q9();
              
              }
              if(mousePressedOver(a3)||mousePressedOver(a1)||mousePressedOver(a4)){
                if(gameState2=="q9"){
               
               
                gameState="wanswer"
                score=score+1
              
                back();
                }
              }
              if(mousePressedOver(a2)&&gameState2=="q9"){
                
                  gameState="ranswer"
                  back();
              }
              
              if (gameState=="wanswer"&&gameState2=="q9"){
                fill("red")
                 text("Wrong answer",150,200) 
               
                 next9=createSprite(300,350,100,30)
                 text('Next',270,360)
                 next9.shapeColor="lightblue"
               
               }
               if (gameState=="ranswer"&&gameState2=="q9"){
                 console.log("ranswer")
                 fill("green")
                 text("Right answer",150,200)
                 score=score+1
                 next9=createSprite(300,350,100,30)
                 text('Next',270,360)
                 next9.shapeColor="lightblue"
               }
               
              if(mousePressedOver(next9)&& gameState2=="q9"){
                back();
                 
                  gameState="easy"
                  gameState2="q10"
              }
                  // Easy10
                if (gameState==="easy"&&gameState2=="q10"){
                  E_q10();
                
                }
                if(mousePressedOver(a3)||mousePressedOver(a1)||mousePressedOver(a4)){
                  if(gameState2=="q10"){
                 
                 
                  gameState="wanswer"
                  score=score+1
                
                  back();
                  }
                }
                if(mousePressedOver(a2)&&gameState2=="q10"){
                  
                    gameState="ranswer"
                    back();
                }
                
                if (gameState=="wanswer"&&gameState2=="q10"){
                  fill("red")
                   text("Wrong answer",150,200) 
                 
                   finish=createSprite(300,350,100,30)
                   text('Next',270,360)
                   finish.shapeColor="lightblue"
                 
                 }
                 if (gameState=="ranswer"&&gameState2=="q10"){
                   console.log("ranswer")
                   fill("green")
                   text("Right answer",150,200)
                   score=score+1
                   finish=createSprite(300,350,100,30)
                   text('Next',270,360)
                   finish.shapeColor="lightblue"
                 }
                 
                if(mousePressedOver(finish)&& gameState2=="q10"){
                  back();
                   
                    

                    text("Score : " + score ,50,50);
                    
                   
                    
                  }
  

function E_q1(){
  
  textSize(25);
  fill("green");
text("David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('Snap',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('David',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('Crackle',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('None',220,310)
  a4.shapeColor="yellow"
 
}
function back(){
  back1=createSprite(200,200,400,400);
back1.shapeColor="black"
  a1.destroy();
  a2.destroy();
  a3.destroy();
  a4.destroy();
}
function E_q2(){
  console.log("E_q2")
  textSize(25);
  fill("green");
text("10*10",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('10',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('20',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('50',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('30',220,310)
  a4.shapeColor="yellow"
 
}
function E_q3(){
  
  textSize(25);
  fill("green");
text("200+22",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('111',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('222',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('522',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('341',220,310)
  a4.shapeColor="yellow"
 
}
function E_q4(){
  
  textSize(25);
  fill("green");
text("233*5",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('1100',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('1000',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('1165',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('340',220,310)
  a4.shapeColor="yellow"
 
}
function E_q5(){
  
  textSize(25);
  fill("green");
text("2+2*3",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('8',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('12',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('10',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('6',220,310)
  a4.shapeColor="yellow"
 
}

function E_q6(){
  
  textSize(25);
  fill("green");
text("2+2+2+2*0+1",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('1',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('4',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('2',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('6',220,310)
  a4.shapeColor="yellow"
 
}
function E_q7(){
  
  textSize(25);
  fill("green");
text("2,4,6,8,10,?",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('12',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('11',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('22',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('13',220,310)
  a4.shapeColor="yellow"
 
}
function E_q8(){
  
  textSize(25);
  fill("green");
text("what number is a prime number?",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('1',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('4',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('2',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('6',220,310)
  a4.shapeColor="yellow"
 
}
function E_q9(){
  
  textSize(25);
  fill("green");
text("5+5=10,10+10=20,20+20=?",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('100',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('40',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('20',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('60',220,310)
  a4.shapeColor="yellow"
 
}
function E_q10(){
  
  textSize(25);
  fill("green");
text("",30,100,380,200);
 
  a1=createSprite(100,250,100,30)
  text('1',70,260)
  a1.shapeColor="yellow"
  a2=createSprite(250,250,100,30)
 text('4',220,260)
  a2.shapeColor="yellow"
  a3=createSprite(100,300,100,30)
 text('2',60,310)
 a3.shapeColor="yellow"
  a4=createSprite(250,300,100,30)
  text('6',220,310)
  a4.shapeColor="yellow"
 
}

}
