
// Handle form submission

document.getElementById('dogForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Get input values
  const breed = document.getElementById('breed').value.trim();
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // create a card only if all fields have values
  if (breed && name && age) {

    const card = new DogCard(breed, name, age);

    document.getElementById('dogCardsContainer').append(card);

    // Reset form after submission
    document.getElementById('dogForm').reset();

    card.bark();

    _myColor.value = "purple";
  }
});