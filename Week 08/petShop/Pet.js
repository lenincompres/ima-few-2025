class Pet {

  image = "https://tinyurl.com/3dse4n7t";

  constructor(name, age = 0, image) {
    this.name = name;
    this.age = age;

    if (!!image) {
      this.image = image;
    }

    this.tagDiv = document.createElement("div");
    this.tagDiv.classList.add("dogTag");
    this.tagDiv.innerHTML = `
      <img src="${this.image}"/>
      <p>Name: <b>${this.name}</b><p>
      <p>Age: <b>${this.age}</b><p>
    `;
  }

  growOld() {
    this.age += 1;
    console.log(`${this.name} is now ${this.age} years old`);
  }

}

export default Pet;