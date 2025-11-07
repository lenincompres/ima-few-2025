import CardDiv from "./CardDiv.js";

let deck = CardDiv.generateDeck();


let flipNumber = 0;

function flipNext(){
  if(flipNumber >= deck.length){
    flipNumber = 0;
    return;
  }
  deck[flipNumber].flip( () => flipNext());
  flipNumber += 1;
}

// Flip the deck

document.getElementById("flip-button").onclick = () => flipAll();

function flipAll(){
  /*
  for(let card of deck){
    card.flip();
  }*/
  flipNumber = 0;
  flipNext(); 
}


// hide the deck

document.getElementById("hide-button").onclick = () => hideAll();

function hideAll(){
  for(let card of deck){
    card.hide();
  }
}

// draw card

document.getElementById("draw-button").onclick = () => draw();

function draw(){
  let rand = Math.floor( Math.random() * deck.length);

  document.getElementById("hand-container").append( deck[rand]);
}


// shhuffle the cards

document.getElementById("shuffle-button").onclick = () => shuffle();

function shuffle(){

  deck.sort( () => Math.random() - 0.5);

  for(let card of deck){
    document.getElementById("deck-container").append(card);
  }

}