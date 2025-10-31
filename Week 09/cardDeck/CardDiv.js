
const cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const cardSuits = ["♠", "♥", "♣", "♦"];

class CardDiv extends HTMLElement {

  constructor(number = 1, suit = 0){
    super();

    let num = cardNumbers[number - 1];
    let suitSymbol= cardSuits[suit];

    this.innerHTML = `${num}${suitSymbol}`;

    this.onclick = () => this.flip();

    // is it a odd suit?
    if(suit%2){
      this.classList.add("red");
    }

  }

  flip(){
    this.classList.toggle("flipped");
  }

  hide(){
    this.classList.add("flipped");
  }

}

customElements.define("card-div", CardDiv);