let i
for (i = 1; i <= 5; i++) {
    // closure (замыкание)
    ((i) => {
        setTimeout(() => {
            console.log(i)
        }, 50)
    })(i)
}
console.log('end')

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');



let x = 0;
let y = 0;
let deltaX = 3
let deltaY = 3
let canvasW = canvas.width;
let canvasH = canvas.height;

class Smile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.drawSmile();
    }

    drawSmile() {
        let {x, y} = this;

        ctx.clearRect(0, 0, canvasW, canvasH);

        ctx.fillStyle = 'lightblue'
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, true); // Внешняя окружность
        ctx.moveTo(x + 35, y);
        ctx.arc(x, y, 35, 0, Math.PI, false);  // рот (по часовой стрелке)
        ctx.moveTo(x - 10, y - 10);
        ctx.arc(x - 15, y - 10, 5, 0, Math.PI * 2, true);  // Левый глаз
        ctx.moveTo(x + 20, y - 10);
        ctx.arc(x + 15, y - 10, 5, 0, Math.PI * 2, true);  // Правый глаз
        ctx.stroke();
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;

        this.drawSmile();
    }
}

let smile = new Smile(100, 100)

function start() {
    requestAnimationFrame(tick)
}


function tick() {
    x += deltaX;
    y += deltaY;

    smile.moveTo(x, y)

    if (deltaX > 0) {
        if (x >= canvasW - 50) {
            deltaX = -deltaX
        }
    } else {
        if (x <= 50) {
            deltaX = -deltaX
        }
    }

    if (deltaY > 0) {
        if (y >= canvasH - 50) {
            deltaY = -deltaY
        }
    } else {
        if (y <= 50) {
            deltaY = -deltaY
        }
    }



    requestAnimationFrame(tick)
}


start()
