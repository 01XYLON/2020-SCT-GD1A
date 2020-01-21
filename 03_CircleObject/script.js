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

let circleObject = {};
circleObject.x = 300;
circleObject.y = 400;
circleObject.radius = 40;
circleObject.color = "pink";
circleObject.speedX = 3;
circleObject.speedY = 4;

circleObject.draw = function(){
    context.beginPath();
    context.fillStyle = "pink";
    context.arc(circleObject.x, circleObject.y, circleObject.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
}

circleObject.update = function(){
    circleObject.x = circleObject.x + circleObject.speedX;
    circleObject.y = circleObject.y + circleObject.speedY;

    if(circleObject.y > height - circleObject.radius || circleObject.y < circleObject.radius){
    circleObject.speedY = - circleObject.speedY;
    }

    if(circleObject.x > width - circleObject.radius || circleObject.x < circleObject.radius){
    circleObject.speedX = - circleObject.speedX;
    }
}


function loop(){
    context.clearRect(0,0,width,height);
    circleObject.update();
    circleObject.draw();
}

setInterval(loop, 10)

function getRandomInt(max){
    return Math.floor(Math.random)
}
