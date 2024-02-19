"use strict";

const canvas = document.getElementById("canvas");
const ananas = document.getElementById("Ananas"); 
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


class Ball {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speedX = Math.random() * 12 - 12; 
        this.speedY = Math.random() * 12 - 12; 
    }

    update(){
        if (this.x >= canvas.width -50) {
            this.speedX = -this.speedX;
        } else if (this.x <= 50) {
            this.speedX = -this.speedX;
        } else if (this.y >= canvas.height -50) {
            this.speedY = -this.speedY;
        } else if (this.y <= 50) {
            this.speedY = -this.speedY;
        }

            this.x += this.speedX;
            this.y += this.speedY;
    }

    draw(){
            ctx.fillStyle = "red";
            ctx.strokeStyle = "orange";
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
    }
}



let B = new Ball();

const move = function() {
    B.update();
    B.draw();
};

const animate = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    move();
};

setInterval(() => {
    animate();                                                                                                                  
}, 10);

animate();