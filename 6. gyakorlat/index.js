const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// State
const bird = {
    x: 50,
    y: (canvas.height - 50) / 2,
    width: 30,
    height: 50,
    vy: -200, // px/s
    ay: 250, // px/s^2
}

// gameLoop
let prevTime = performance.now();

function gameLoop(now = performance.now()) {
    const dt = (now - prevTime) / 1000
    prevTime = now

    update(dt);
    draw();

    requestAnimationFrame(gameLoop);
}

function update(dt) {
    // Move bird
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt
    if(bird.y> canvas.height)
    {
        bird.y = canvas.height-bird.height;
    }
}

function draw() {
    // sky
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // bird
    ctx.fillStyle = "brown"
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height)
}
gameLoop()

document.addEventListener('keydown',onClickfunc);

function onClickfunc(){
    
    bird.vy= -200;
    };

const oszlopok = []
const RES = 150;    // px, felső és alsó oszlop közötti rés
const OSZLOP_TAVOLSAG = 300;  // px, egymást követő oszlopok közötti távolság
const OSZLOP_SEBESSEG = -200;  // px, az oszlopok vízszintes sebessége

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
function ujOszlop() {
    const h = random(10, canvas.height / 2);
    oszlopok.push(
        {
            x: canvas.width-30,
            y: 0,
            width: 30,
            height: h,
        },
        {
            x: canvas.width-30,
            y: h + RES,
            width: 30,
            height: canvas.height - RES - h,
        },
    );
}
// Start
ujOszlop()