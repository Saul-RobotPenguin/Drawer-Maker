const canvas = document.getElementById("draw");
const clear = document.getElementById("clear");
const eraser = document.getElementById("eraser");
const context = canvas.getContext("2d");

//buttons variables for colors
const blackButton = document.getElementById("black");
const grayButton = document.getElementById("gray");
const maroon5Button = document.getElementById("maroon5");
const redButton = document.getElementById("red");
const orangeButton = document.getElementById("orange");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");
const skyblueButton = document.getElementById("skyblue");
const indigoButton = document.getElementById("indigo");
const purpleButton = document.getElementById("purple");
const whiteButton = document.getElementById("white");
const lightGreyButton = document.getElementById("light-gray");
const brownButton = document.getElementById("brown");
const roseQuartzButton = document.getElementById("rose-quartz");
const darkOrangeButton = document.getElementById("dark-orange");
const vanillaButton = document.getElementById("vanilla");
const limeButton = document.getElementById("lime");
const lightSkyBlueButton = document.getElementById("light-skyblue");
const lightIndigoButton = document.getElementById("light-indigo");
const lilacButton = document.getElementById("lilac");
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

    mouseCircle.style.top = revisedPosY + 170 + "px";
    mouseCircle.style.left = revisedPosX + "px";
  }
  delayMouseFollow();
});
///

//Drawing
function draw(e) {
  if (e.buttons !== 1) return;

  let color = document.getElementById("hex").value;

  //Change value of color depending which button is clicked
  blackButton.onclick = function () {
    color = "#000000";
    document.getElementById("hex").value = color;
  };

  grayButton.onclick = function () {
    color = "#7f7f7f";
    document.getElementById("hex").value = color;
  };

  maroon5Button.onclick = function () {
    color = "#880015";
    document.getElementById("hex").value = color;
  };

  redButton.onclick = function () {
    color = "#ed1c24";
    document.getElementById("hex").value = color;
  };

  orangeButton.onclick = function () {
    color = "#ff7f27";
    document.getElementById("hex").value = color;
  };

  yellowButton.onclick = function () {
    color = "#fff200";
    document.getElementById("hex").value = color;
  };

  greenButton.onclick = function () {
    color = "#22b14c";
    document.getElementById("hex").value = color;
  };
  skyblueButton.onclick = function () {
    color = "#00a2e8";
    document.getElementById("hex").value = color;
  };

  indigoButton.onclick = function () {
    color = "#3f48cc";
    document.getElementById("hex").value = color;
  };

  purpleButton.onclick = function () {
    color = "#a349a4";
    document.getElementById("hex").value = color;
  };

  whiteButton.onclick = function () {
    color = "#ffffff";
    document.getElementById("hex").value = color;
  };

  lightGreyButton.onclick = function () {
    color = "#c3c3c3";
    document.getElementById("hex").value = color;
  };

  brownButton.onclick = function () {
    color = "#b97a57";
    document.getElementById("hex").value = color;
  };

  roseQuartzButton.onclick = function () {
    color = "#ffaec9";
    document.getElementById("hex").value = color;
  };

  darkOrangeButton.onclick = function () {
    color = "#ffc90e";
    document.getElementById("hex").value = color;
  };
  vanillaButton.onclick = function () {
    color = "#efe4b0";
    document.getElementById("hex").value = color;
  };
  limeButton.onclick = function () {
    color = "#b5e61d";
    document.getElementById("hex").value = color;
  };

  lightSkyBlueButton.onclick = function () {
    color = "#99d9ea";
    document.getElementById("hex").value = color;
  };
  lightIndigoButton.onclick = function () {
    color = "#7092be";
    document.getElementById("hex").value = color;
  };
  lilacButton.onclick = function () {
    color = "#c8bfe7";
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
