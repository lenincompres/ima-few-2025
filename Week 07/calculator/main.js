

function computeAndDisplay(){

  let a = parseInt(value1.value);
  let b = parseInt(value2.value);
  value2.style.borderColor = "black";
  value1.style.borderColor = "black";

  if ( isNaN(a) ) {

    value1.style.borderColor = "red";

  } else  if ( isNaN(b) ) {

    value2.style.borderColor = "red";

  } else {

    //Copute de result

    if(operationSelect.value == 1){

      resultsSection.innerText = a + b;

    } else if(operationSelect.value == "Substract") {

      resultsSection.innerText = a - b;

    }


  }

}

computeButton.onclick = computeAndDisplay;