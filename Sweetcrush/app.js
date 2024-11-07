const grid = document.querySelector('.grid');
 const width = 8;
 const squares = [];
 const candyColors = [
   '#FF385F',
   '#48C773',
   '#B86AFE',
   '#00D1B2',
   '#3273DC',
   '#F5C401'
 ];

 // Create the board
 function createBoard() {
  for (let i = 0; i < width*width; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', i);
    let randomColor = Math.floor(Math.random() * candyColors.length);
    square.style.backgroundColor = candyColors[randomColor];
    grid.appendChild(square);
    squares.push(square);
  }
}
createBoard();

//ID translation
for (let x = 0; x < width*width; x++){
    for(let y = 0; y < width; y++){
        let temporalSquare = document.getElementById(y + (x * width));
        temporalSquare.innerHTML = String.fromCharCode(97 + y) + (x + 1);
    }
}

function resetBoard() {
    location.reload();
}

// Get references to the arrow buttons
const upArrow = document.getElementById("up");
const downArrow = document.getElementById("down");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

// Add event listeners to the buttons
upArrow.addEventListener('click', moveUp);
downArrow.addEventListener('click', moveDown);
leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

let selectedSquareId = null;

function moveInput(){
var targetSquareRaw = document.getElementById("moveInput").value;
selectedSquareId =
}

function selectSquare() {
  selectedSquareId = parseInt(this.id);
}

function moveUp() {
  if (selectedSquareId >= width) {
    const aboveSquareId = selectedSquareId - width;
    swapCandies(selectedSquareId, aboveSquareId);
  }
}

function moveDown() {
  if (selectedSquareId < width * (width - 1)) {
    const belowSquareId = selectedSquareId + width;
    swapCandies(selectedSquareId, belowSquareId);
  }
}

function moveLeft() {
  if (selectedSquareId % width !== 0) {
    const leftSquareId = selectedSquareId - 1;
    swapCandies(selectedSquareId, leftSquareId);
  }
}

function moveRight() {
  if (selectedSquareId % width !== width - 1) {
    const rightSquareId = selectedSquareId + 1;
    swapCandies(selectedSquareId, rightSquareId);
  }
}

function swapCandies(squareId1, squareId2) {
  const square1 = squares[squareId1];
  const square2 = squares[squareId2];

  const tempColor = square1.style.backgroundColor;
  square1.style.backgroundColor = square2.style.backgroundColor;
  square2.style.backgroundColor = tempColor;

  checkRowForFour();
  checkColumnForFour();
  checkRowForThree();
  checkColumnForThree();
}

//drop candies once some have been cleared
function moveIntoSquareBelow() {
  for (let i = width * (width - 1); i >= 0; i--) {
    if (squares[i].style.backgroundColor === '') {
      for (let j = i - width; j >= 0; j -= width) {
        if (squares[j].style.backgroundColor !== '') {
          squares[i].style.backgroundColor = squares[j].style.backgroundColor;
          squares[j].style.backgroundColor = '';
          break;
        }
      }
    }
  }

  // Fill empty spaces in the top row
  for (let i = 0; i < width; i++) {
    if (squares[i].style.backgroundColor === '') {
      let randomColor = Math.floor(Math.random() * candyColors.length);
      squares[i].style.backgroundColor = candyColors[randomColor];  

    }
  }
}


function checkRowForFour() {
  for (let i = 0; i < 60; i++) {
    let rowOfFour = [i, i + 1, i + 2, i + 3];
    let decidedColor = squares[i].style.backgroundColor;

    if (rowOfFour.every(index => squares[index].style.backgroundColor === decidedColor && squares[index].style.backgroundColor !== '')) {
      rowOfFour.forEach(index => squares[index].style.backgroundColor = '');
      moveIntoSquareBelow();
    }
  }
}

function checkColumnForFour() {
  for (let i = 0; i < 39; i++) {
    let columnOfFour = [i, i + width, i + width * 2, i + width * 3];
    let decidedColor = squares[i].style.backgroundColor;

    if (columnOfFour.every(index => squares[index].style.backgroundColor === decidedColor && squares[index].style.backgroundColor !== '')) {
      columnOfFour.forEach(index => squares[index].style.backgroundColor = '');
      moveIntoSquareBelow();
    }
  }
}

function checkRowForThree() {
  for (let i = 0; i < 61; i++) {
    let rowOfThree = [i, i + 1, i + 2];
    let decidedColor = squares[i].style.backgroundColor;

    if (rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && squares[index].style.backgroundColor !== '')) {
      rowOfThree.forEach(index => squares[index].style.backgroundColor = '');
      moveIntoSquareBelow();
    }
  }
}

function checkColumnForThree() {
  for (let i = 0; i < 47; i++) {
    let columnOfThree = [i, i + width, i + width * 2];
    let decidedColor = squares[i].style.backgroundColor;

    if (columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && squares[index].style.backgroundColor !== '')) {
      columnOfThree.forEach(index => squares[index].style.backgroundColor = '');
      moveIntoSquareBelow();
    }
  }
}


function() {
    checkRowForFour();
    checkColumnForFour();
    checkRowForThree();
    checkColumnForThree();
 }
