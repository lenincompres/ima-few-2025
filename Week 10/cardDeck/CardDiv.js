const cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

export const cardSuits = ["♠", "♥", "♣", "♦"];

class CardDiv extends HTMLElement {

  constructor(number = 1, suit = 0) {
    super();

    let num = CardDiv.NUMBERS[number - 1];
    let suitSymbol = CardDiv.SUITS[suit];

    this.innerHTML = `${num}${suitSymbol}`;

    this.onclick = () => this.flip();

    // is it a odd suit?
    if (suit % 2) {
      this.classList.add("red");
    }

  }

  static SUITS = ["♠", "♥", "♣", "♦"];

  static NUMBERS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  static generateDeck() {
    let deck = [];

    for (let suit = 0; suit < CardDiv.SUITS.length; suit++) {

      for (let i = 1; i < CardDiv.NUMBERS.length + 1; i++) {

        const card = new CardDiv(i, suit);

        deck.push(card);

        document.getElementById("deck-container").append(card);

      }
    }

    return deck;
  }

  flip(callBack = () => null) {
    this.classList.toggle("flipped");

    setTimeout( () => callBack(), 200);
  }

  hide() {
    this.classList.add("flipped");
  }

}

customElements.define("card-div", CardDiv);


export default CardDiv;