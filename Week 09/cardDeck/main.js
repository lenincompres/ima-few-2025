
let deck = [];


for(let suit = 0; suit < 4; suit++){

  for(let i = 1; i < 14; i++){

    const card = new CardDiv(i, suit);

    deck.push(card);

    document.getElementById("deck-container").append(card);

  }
}

// Flip the deck

document.getElementById("flip-button").onclick = () => flipAll();

function flipAll(){
  for(let card of deck){
    card.flip();
  }
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