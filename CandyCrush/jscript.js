var table = document.getElementById("myTable")
const WIDTH = 8
const RED = "#FF385F"
const GREEN = "#48C773"
const PURPLE = "#B86AFE"
const TURQUOISE = "#00D1B2"
const BLUE = "#3273DC"
const YELLOW = "#F5C401"
const colors = [RED, GREEN, PURPLE, TURQUOISE, BLUE, YELLOW]
var table = document.getElementById("myTable")
for (var i = 1; i < 9; i++) {
  var holder = table.insertRow()
  holder.insertCell(-1).innerHTML = "a" + i
  holder.insertCell(-1).innerHTML = "b" + i
  holder.insertCell(-1).innerHTML = "c" + i
  holder.insertCell(-1).innerHTML = "d" + i
  holder.insertCell(-1).innerHTML = "e" + i
  holder.insertCell(-1).innerHTML = "f" + i
  holder.insertCell(-1).innerHTML = "g" + i
  holder.insertCell(-1).innerHTML = "h" + i
}
var cells = document.getElementsByTagName("td")
for (var x = 0; x < cells.length; x++) {
  cells[x].style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)]
}
for (var x = 0; x < cells.length; x++){
  if (x < 8){
  cells[x].id = String.fromCharCode(97 + x) + 1;
  }else if (x < 16){
  cells[x].id = String.fromCharCode(97 + (x - 8)) + 2;
  }else if (x < 24){
  cells[x].id = String.fromCharCode(97 + (x - 16)) + 3;
  }else if (x < 32){
  cells[x].id = String.fromCharCode(97 + (x - 24)) + 4;
  }else if (x < 40){
  cells[x].id = String.fromCharCode(97 + (x - 32)) + 5;
  }else if (x < 48){
  cells[x].id = String.fromCharCode(97 + (x - 40)) + 6;
  }else if (x < 56){
  cells[x].id = String.fromCharCode(97 + (x - 48)) + 7;
  }else if (x < 64){
  cells[x].id = String.fromCharCode(97 + (x - 56)) + 8;
  }}
  document.getElementById("up").disabled = true;
  document.getElementById("left").disabled = true;
  document.getElementById("right").disabled = true;
  document.getElementById("down").disabled = true;
  
function validateMove() {
  document.getElementById("up").disabled = true;
  document.getElementById("left").disabled = true;
  document.getElementById("right").disabled = true;
  document.getElementById("down").disabled = true;

  var casilla = document.getElementById('move').value;
  var moveVertical = 0;
  var moveHorizontal = 0
  var moveVertical = casilla.charCodeAt(1);
  var moveHorizontal = casilla.charCodeAt(0);

if (moveVertical > 49){
        document.getElementById("up").disabled = false;
   }
  if (moveVertical < 56){
      document.getElementById("down").disabled = false;
    }
  if (moveHorizontal > 97){
    document.getElementById("left").disabled = false;
  }
  if (moveHorizontal < 104){
    document.getElementById("right").disabled = false;
  }

  if(casilla == null || moveVertical == 0 || 49 > moveVertical || moveVertical > 56 || 96 > moveHorizontal || moveHorizontal > 105 || casilla.length != 2){
  document.getElementById("up").disabled = true;
  document.getElementById("left").disabled = true;
  document.getElementById("right").disabled = true;
  document.getElementById("down").disabled = true;
  }

  
}

function weeset() {
  location.reload()
}

function uppies(){
var casilla = document.getElementById('move').value;
var moveUp = casilla.charCodeAt(1);
if (moveUp > 49){
var destination = casilla.charAt(0) + String.fromCharCode(moveUp - 1);
var move1 = document.getElementById(casilla);
var move2 = document.getElementById(destination);
var temporal = move2.style.backgroundColor;
move2.style.backgroundColor = move1.style.backgroundColor;
move1.style.backgroundColor = temporal;
}else{
  alert("Movimiento invalido");
}
var resetti = document.getElementById("move");
      resetti.value = "";
      document.getElementById("move").focus();
}

function downies(){
  var casilla = document.getElementById('move').value;
  var moveDown = casilla.charCodeAt(1);
  if (moveDown < 56){
  var destination = casilla.charAt(0) + String.fromCharCode(moveDown + 1);
  var move1 = document.getElementById(casilla);
  var move2 = document.getElementById(destination);
  var temporal = move2.style.backgroundColor;
  move2.style.backgroundColor = move1.style.backgroundColor;
  move1.style.backgroundColor = temporal;
  }else{
    alert("Movimiento invalido");
  }
  var resetti = document.getElementById("move");
      resetti.value = "";
      document.getElementById("move").focus();
  }

  function lefties(){
    var casilla = document.getElementById('move').value;
    var moveLeft = casilla.charCodeAt(0);
    if (moveLeft > 97){
    var destination = String.fromCharCode(moveLeft - 1) + casilla.charAt(1);
    var move1 = document.getElementById(casilla);
    var move2 = document.getElementById(destination);
    var temporal = move2.style.backgroundColor;
    move2.style.backgroundColor = move1.style.backgroundColor;
    move1.style.backgroundColor = temporal;
    }else{
      alert("Movimiento invalido");
    }
    var resetti = document.getElementById("move");
    resetti.value = "";
    document.getElementById("move").focus();
    }

    function righties(){
      
      var casilla = document.getElementById('move').value;
      var moveRight = casilla.charCodeAt(0);
      if (moveRight < 104){
      var destination = String.fromCharCode(moveRight + 1) + casilla.charAt(1);
      var move1 = document.getElementById(casilla);
      var move2 = document.getElementById(destination);
      var temporal = move2.style.backgroundColor;
      move2.style.backgroundColor = move1.style.backgroundColor;
      move1.style.backgroundColor = temporal;
      }else{
        alert("Movimiento invalido");
      }
      var resetti = document.getElementById("move");
      resetti.value = "";
      document.getElementById("move").focus();
      }
