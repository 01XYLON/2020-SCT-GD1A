// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

let colors = ["rgb(250, 235, 215)","rgb(240, 128, 128)","rgb(205, 92, 92)","rgb(255, 182, 193)","rgb(250, 128, 114)","rgb(255, 192, 203)"]


console.log(getRandomNumber(200));

function getRandomNumber(max){
  return Math.floor(Math.random()*max);

}

function drawCircle(){
context.beginPath()
context.fillStyle = colors[getRandomNumber(colors.length)];
context.arc(getRandomNumber(width), getRandomNumber(height), getRandomNumber(120), 0, Math.PI*2);
context.stroke();
context.fill();
context.closePath();
}

function animate(){
  drawCircle();
}

setInterval(animate, 100);
