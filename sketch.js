let totodile;
let charizard;
let Pokeback;
let attackBox;
let tHealth = 100;
let cHealth = 100;
let dAttack = cHealth - 25;
let ettack = tHealth - 25;

function setup(){
	createCanvas(800, 800);
  
  //Images
  
	Pokeback = loadImage("images/BattleGround.png");
	totodile = loadImage("images/totot.png");
  charizard = loadImage("images/pokemans_006.gif");
  attackBox = loadImage("images/Fddfnk.png")
}

function draw(){
background(255); 
	
  background(Pokeback);
  image(totodile ,80,500,350,350)//location
  
  image(charizard,550,200,150,150)//location

  fill(0)
  image(attackBox,550,700,200,60)

  //Totodile Health
  textSize(40)
	text("HP: " + tHealth, 550,600)
  //Charizard Health
  textSize(40)
    text("HP: " + cHealth, 60,100 )
    //text
  textSize(24)
  text("Attack:Slash  ",580,740)
    

}

function checkHealth(){
    if(cHealth == 0){
        cHealth = 25;
    }
}


 function mouseClicked() {
  		if(mouseX > 550 && mouseX < 750 && mouseY > 700 && mouseY < 750){
              checkHealth();
              cHealth -= 25;   
      }
  }

  