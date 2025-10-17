
// here we are declaring variable a and b
let a = "five";
let b = a + 10;

let updateDisplay = () => {

  let breakElement = "</br>";

  
  mainDisplay.innerHTML = `
    <h3>
      ${ b }
    </h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.${breakElement }Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  `;

}

updateButton.onclick = updateDisplay;

mainDisplay.onclick = updateDisplay;

console.log(b);

b = b + b;

console.log(b);

b = "I just changed the value";

console.log(b);
