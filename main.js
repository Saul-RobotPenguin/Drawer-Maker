const canvas = document.getElementById("draw");
const clear = document.getElementById("clear");
const eraser = document.getElementById("eraser");
const context = canvas.getContext("2d");
const redButton = document.getElementById("red");
const blackButton = document.getElementById("black");
resize();

//Resize teh width of canvas
function resize() {
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
}

const pos = { x: 0, y: 0 };

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

///
///Mouse Hover Effect
document.addEventListener("DOMContentLoaded", () => {
  mouseCircle = document.getElementById("mouse-circle");

  document.onmousemove = (e) => {
    setPosition(e);
  };

  let delay = 2,
    revisedPosX = 0,
    revisedPosY = 0;

  function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow);

    revisedPosX += (pos.x - revisedPosX) / delay;
    revisedPosY += (pos.y - revisedPosY) / delay;

    mouseCircle.style.top = revisedPosY + 110 + "px";
    mouseCircle.style.left = revisedPosX + "px";
  }
  delayMouseFollow();
});
///

//Drawing
function draw(e) {
  if (e.buttons !== 1) return;

  let color = document.getElementById("hex").value;

  redButton.onclick = function () {
    color = "#880015";
    document.getElementById("hex").value = color;
  };

  blackButton.onclick = function () {
    color = "#000000";
    document.getElementById("hex").value = color;
  };

  context.beginPath();

  context.lineWidth = 5;
  context.lineCap = "round";
  context.strokeStyle = color;

  context.moveTo(pos.x, pos.y);
  setPosition(e);
  context.lineTo(pos.x, pos.y);

  context.stroke();
}

//Clear The Canvas
clear.addEventListener("click", clearCanvas);

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

//Eraser

eraser.addEventListener("click", Erase);

function Erase() {
  context.globalCompositeOperation = "destination-out";
}

//change Colors

// redButton.addEventListener("click", changeColorToRed);
// function changeColorToRed() {
//   let color = document.getElementById("red").value;
//   context.strokeStyle = color;
//   console.log(color);

//   context.strokeStyle = color;
//   console.log(color);
//   return color;
// }

//Event listeners
window.addEventListener("resize", resize);

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
