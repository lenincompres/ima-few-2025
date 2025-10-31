// Handle form submission

document.getElementById('dogForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Get input values
  const breed = document.getElementById('breed').value.trim();
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // create a card only if all fields have values
  if (breed && name && age) {
    createDogCard(breed, name, age);

    // Reset form after submission
    document.getElementById('dogForm').reset();
  }
});

function createDogCard(breed, name, age) {
  const container = document.getElementById('dogCardsContainer');

  // Create card elements
  const card = document.createElement('div');
  card.className = 'dog-card';

  const title = document.createElement('h3');
  title.textContent = name;

  const breedEl = document.createElement('p');
  breedEl.textContent = `Breed: ${breed}`;

  const ageEl = document.createElement('p');
  ageEl.textContent = `Age: ${age}`;

  // Append to card
  card.appendChild(title);
  card.appendChild(breedEl);
  card.appendChild(ageEl);

  // Add card to container
  container.appendChild(card);

  if (age < 2) {
    document.getElementById('group1').appendChild(card.cloneNode(true));
  } else {
    document.getElementById('group2').appendChild(card.cloneNode(true));
  }
}

// count number of dog cards on the page
function countCards() {
  const cards = document.getElementsByClassName('dog-card');
  document.getElementById('output1').textContent =
    `There are ${cards.length} dog cards currently on this page.`;
}

// count number of elements inside the first ID (group1)
function countGroup1() {
  const group1 = document.getElementById('group1');
  const count = group1.getElementsByTagName('*').length;
  document.getElementById('output2').textContent =
    `The Puppy Pen (#group1) contains ${count} elements.`;
}

// count number of elements inside tthe second ID (group2)
function countGroup2() {
  const group2 = document.getElementById('group2');
  const count = group2.getElementsByTagName('*').length;
  document.getElementById('output3').textContent =
    `The Adult Dog Zone (#group2) contains ${count} elements.`;
}