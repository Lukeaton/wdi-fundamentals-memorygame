console.log("Up and running!");
console.log("User flipped " + cardOne);
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = ['0'];
cardsInPlay.push('cardOne');
console.log("User flipped queen");
var cardTwo = ['2'];
cardsInPlay.push('cardTwo');
console.log('User Flipped king');
if (cardsInPlay.length === 2) { 
	console.log("you have selected two cards"); 
	if (cardsInPlay[0] === cardsInPlay[1]) 
		alert("You found a match!"); 
else alert("Sorry, try again"); } 