
$(document).ready(function(){
 
// Variables for each character
var yoda = {
	health: 120,
	attack: 8,
	counterAttack: 25,
};
var luke ={
	health: 100,
	attack: 20,
	counterAttack: 5,
} ;
var anakin = {
	health: 150,
	attack: 6,
	counterAttack: 20,
}; 
var ren ={
	health: 180,
	attack: 4,
	counterAttack: 25,
};
// Variables for the functions below
var counter = 0;
var enemyCounter = 0;
var heroHP = 1;
var heroAttack = 0;
var clickcounter = 0;
var hc = 0 ;
var ec = 0 ;
var enemyHP = 0;
var kills = 0;


//FUNCTIONS BELOW!
//Check to see if you have won

//Yoda on click function
	$("#yoda").on("click", function() {
		if (clickcounter === 0) {
			heroHP = yoda.health;
			heroAttack = yoda.attack;
			hc = 1;
		}
		else if(clickcounter === 1){
			enemyHP = yoda.health;
			enemyCounter = yoda.counterAttack;
			ec = 1;
		}
	});
	//Luke onclick function
	$("#luke").on("click", function() {
		if (clickcounter === 0) {
			heroHP = luke.health;
			heroAttack = luke.attack;
			hc = 2;
		}
		else if(clickcounter === 1){
			enemyHP = luke.health;
			enemyCounter = luke.counterAttack;
			ec = 2;
		}
	});	
	//Anakin onclick funtion
	$("#anakin").on("click", function() {
		if (clickcounter === 0) {
			heroHP = anakin.health;
			heroAttack = anakin.attack;
			hc = 3;
		}
		else if(clickcounter === 1){
			enemyHP = anakin.health;
			enemyCounter = anakin.counterAttack;
			ec = 3;
		}
	});
	//Ren onclick funtion
	$("#ren").on("click", function() {
		if (clickcounter === 0) {
			heroHP = ren.health;
			heroAttack = ren.attack;
			hc = 4;
		}
		else if(clickcounter === 1){
			enemyHP = ren.health;
			enemyCounter = ren.counterAttack;
			ec = 4;
		}
	});
	
	
//Funtion to determine where characters go if you click them

	$(".imgBox").on("click", function() {  // choose Hero and Defender by clicking on images First click is Hero second Click(choice) is enemy)
		if (clickcounter === 0) {
		$("#enemies").html(images);
		$("#chosen").html(this);
		console.log(this);
		$("#choose").html("<h1>Choose Your Enemy!</h1>");
		$(this).removeClass("imgBox");
		clickcounter++
		}

		else if(clickcounter === 1){
			$("#enemy").html(this);
			$("#choose").html("<h1>FIGHT!</h1>");
			// test++;
			clickcounter++;
		}
	})
// restart button reloads window

	$("#restart").on("click", function() {
							window.location.reload(true);
	})
// attack button on click function
	$("#attack").on("click", function() {
		// Check to make sure there is both attacker and defender
				if (clickcounter < 2) {
					$("#give").html("Please Select a Hero and a Defender to Attack!");
				};
		// If so the continue with battle
				if(clickcounter >= 2){
					enemyHP = enemyHP - heroAttack; //enemy hp minus hero attack
				
					if(enemyHP <= 0){ //If enemy dies prepare for next fight
						kills++;
						$("#enemy").text("dead");
						$("#choose").html("<h1>Choose Your Enemy!</h1>");
						
						enemyCounter = 0;
						clickcounter = 1;
					}

					heroHP = heroHP - enemyCounter; //calculate hero health
					// battle status at bottom of page
					$("#give").text("You attacked for " + heroAttack + " damage");
					$("#take").text("You received " + enemyCounter + " damage!");

					if(kills >= 3){  // if you won tell player prepare for new game
							$("#choose").html("<h1>YOU WON!</h1>");
							$("#buttons").text("Please restart the game");
							$("#give").text("You win: Congratulations Hit restart to play again");
						}
				//  check which hero / enemy is chosen and display their current health
					if(hc === 1){
						$("#YH").text(heroHP);
						heroAttack = heroAttack + yoda.attack;
					}
					if(ec === 1){
						$("#YH").text(enemyHP);
					}
					if(hc === 2){
						$("#LH").text(heroHP);
						heroAttack = heroAttack + luke.attack;
					}
					if(ec === 2){
						$("#LH").text(enemyHP);
					}
					if(hc === 3){
						$("#AH").text(heroHP);
						heroAttack = heroAttack + anakin.attack;
					}
					if(ec === 3){
						$("#AH").text(enemyHP);
					}
					
					if(hc === 4) {
					 	$("#RH").text(heroHP);
					 	heroAttack = heroAttack + ren.attack;
					}
					if(ec === 4){
						$("#RH").text(enemyHP);
					}
				}
		counter++;

		if(heroHP <= 0){ // if you lose prepare for new game
			$("#choose").html("<h1>YOU LOSE!</h1>");
			$("#buttons").text("Please restart the game");
		}
	})

})
	
