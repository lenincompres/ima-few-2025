class DogCard extends HTMLElement {

  constructor(breed, name, age){
    super();

    this.breed = breed ? breed : this.getAttribute("breed");
    this.name = name ? name : this.getAttribute("name");
    this.age = age ? age : this.getAttribute("age");

    this.set({
      class: "dog-card",
      h3: this.name,
      p: [
        `Breed: ${this.breed}`,
        `Age: ${this.age}`,
      ],
      button: {
        text: "Bark",
        onclick: () => this.bark(),
      }
    });

    newColor = "blue";
  }

  bark(){
    alert(`${this.name} is barking!`);
  }

}

customElements.define('dog-card', DogCard);