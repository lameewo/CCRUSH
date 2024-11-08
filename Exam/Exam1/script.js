
const grid = document.querySelector('.grid');
const squares = [];
function createNumpad() {
  for (let i = 0; i < 4*4; i++) {
    const square = document.createElement('button');
    square.setAttribute('id', i);
    square.setAttribute("class", "numOnPad");
    square.innerHTML = i <= 9 ? i : String.fromCharCode(55 + i);
        square.value = i <= 9 ? i.toString() : String.fromCharCode(55 + i); // Assign value to the button

        square.onclick = function() {
          document.getElementById("numDisplay").value += square.value;
        };

    grid.appendChild(square);
    squares.push(square);
    if(i > 9){
    square.innerHTML = String.fromCharCode(55 + i);
    }
  }
}
createNumpad();

let theBase;

function lock1() {
  const radioButtons = document.querySelectorAll('input[name="tiposBase"]');

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      theBase = radioButton.value;
      break; // Exit the loop once a checked radio button is found
    }
  }
  radioButtons.forEach(button => button.disabled = true);
  alert(theBase);
}




