

async function loadCatBreeds(){
  const response = await fetch("cats.json");
  const data = await response.json();

  // you an create the main content area using the document.createElement method or using a helper library like DOM.js
  mainContent.set({
    h2: data.description,
    select: {
      onchange: event => loadWikipedia(event.target.value),
      option: data.cats,
    }
  });

}

function loadWikipedia(breed){
  wikipediaFrame.src = "https://en.wikipedia.org/wiki/" + breed + " cat";
}

loadCatBreeds();