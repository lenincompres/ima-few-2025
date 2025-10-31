class DogCard extends HTMLElement {

  constructor(breed, name, age){
    super();

    this.breed = breed ? breed : this.getAttribute("breed");
    this.name = name ? name : this.getAttribute("name");
    this.age = age ? age : this.getAttribute("age");

    this.classList.add("dog-card");

    this.innerHTML = `
      <h3>${this.name}</h3>
      <p>Breed: ${this.breed}</p>
      <p>Age: ${this.age}</p>
    `;

    const barkBtn = document.createElement('button');
    barkBtn.innerHTML = "Bark";
    //barkBtn.onclick = () => this.bark();
    barkBtn.addEventListener("click", () => this.bark());
    this.append(barkBtn);

  }

  bark(){
    alert(`${this.name} is barking!`);
  }

}

customElements.define('dog-card', DogCard);