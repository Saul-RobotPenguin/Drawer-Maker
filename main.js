const canvas = document.getElementById("draw");
const clear = document.getElementById("clear");
const context = canvas.getContext("2d");

resize();

function resize() {
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
}

const pos = { x: 0, y: 0 };

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return;

  const color = document.getElementById("hex").value;

  context.beginPath();

  context.lineWidth = 2;
  context.lineCap = "round";
  context.strokeStyle = color;

  context.moveTo(pos.x, pos.y);
  setPosition(e);
  context.lineTo(pos.x, pos.y);

  context.stroke();
}

clear.addEventListener("click", clearCanvas);

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("resize", resize);

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
