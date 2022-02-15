const canvas = document.getElementById("draw");
const clear = document.getElementById("clear");
const eraser = document.getElementById("eraser");
const context = canvas.getContext("2d");
const downloadImageButton = document.getElementById("download");

//name for thickness of line
const lineSize = document.querySelector(".line-size-options");

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

    mouseCircle.style.top = revisedPosY + 290 + "px";
    mouseCircle.style.left = revisedPosX + "px";
  }
  delayMouseFollow();
});
///

//Drawing Functionality
function draw(e) {
  if (e.buttons !== 1) return;

  let color = document.getElementById("hex").value;
  document.getElementById("hex").onchange = function () {
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  //Change value of color depending which button is clicked
  blackButton.onclick = function () {
    color = "#000000";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  grayButton.onclick = function () {
    color = "#7f7f7f";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  maroon5Button.onclick = function () {
    color = "#880015";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  redButton.onclick = function () {
    color = "#ed1c24";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  orangeButton.onclick = function () {
    color = "#ff7f27";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  yellowButton.onclick = function () {
    color = "#fff200";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  greenButton.onclick = function () {
    color = "#22b14c";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };
  skyblueButton.onclick = function () {
    color = "#00a2e8";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  indigoButton.onclick = function () {
    color = "#3f48cc";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  purpleButton.onclick = function () {
    color = "#a349a4";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  whiteButton.onclick = function () {
    color = "#ffffff";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  lightGreyButton.onclick = function () {
    color = "#c3c3c3";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  brownButton.onclick = function () {
    color = "#b97a57";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  roseQuartzButton.onclick = function () {
    color = "#ffaec9";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  darkOrangeButton.onclick = function () {
    color = "#ffc90e";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };
  vanillaButton.onclick = function () {
    color = "#efe4b0";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };
  limeButton.onclick = function () {
    color = "#b5e61d";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  lightSkyBlueButton.onclick = function () {
    color = "#99d9ea";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };
  lightIndigoButton.onclick = function () {
    color = "#7092be";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };
  lilacButton.onclick = function () {
    color = "#c8bfe7";
    document.getElementById("hex").value = color;
    context.strokeStyle = color;
    context.globalCompositeOperation = "source-over";
  };

  context.beginPath();

  context.lineWidth = 5;

  //Depending of selected options bar, the value would change according to the users selected value
  let line = lineSize.options[lineSize.selectedIndex].value;
  context.lineWidth = line;
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

//Eraser Tool Functionality

eraser.addEventListener("click", Erase);

function Erase() {
  context.globalCompositeOperation = "destination-out";
}

//Download Canvas Image
downloadImageButton.addEventListener("click", downloadUsersArt);
function downloadUsersArt() {
  // get canvas data
  let usersImage = canvas.toDataURL();

  // create link
  let link = document.createElement("a");
  link.download = "image.png"; // set the name of the download file
  link.href = usersImage;

  // temporarily add link to body and initiate the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

window.addEventListener("resize", resize);

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
