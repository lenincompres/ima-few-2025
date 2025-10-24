import Dog from "./Dog.js";
import Pet from "./Pet.js";

let myPets = [
  new Dog("oreo", 10, "dalmatian", "url"), 
  new Dog("Chip", 5, "Chihuahua"), 
  new Dog("Mango", 2, "Corgi"),
  new Pet("Noodle", 3),
];

for(let pet of myPets){
  mainGallery.append(pet.tagDiv);
}
