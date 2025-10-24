import Pet from "./Pet.js"

class Dog extends Pet {

  constructor(name, age = 0, breed = "retriever", image) {
    super(name, age, image);

    this.species = "Dog";
    this.breed = breed;

    let barkButton = document.createElement("button");
    barkButton.innerHTML = "Bark";
    barkButton.onclick = () => this.bark();
    this.tagDiv.append(barkButton);

    this.barkFile = new Audio(`assets/${this.name}.mp3`);
  }

  bark() {
    this.barkFile.play();
  }

  shutUp() {
    this.barkFile.stop();
  }

  jump() {
    console.log(`${this.name} jumps!`);
  }

}

export default Dog;