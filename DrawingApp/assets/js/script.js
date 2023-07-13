const canvas = document.getElementById("canvas");;
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const appContext = canvas.getContext("2d");

let size = 10;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x, y;


canvas.addEventListener("mousedown", e => {
    isPressed = true;
    [x, y] = [e.offsetX, e.offsetY];
});

document.addEventListener("mouseup", e => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", e => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

const drawCircle = (x, y) => {
    appContext.beginPath();
    appContext.arc(x, y, size, 0, Math.PI * 2);
    appContext.fillStyle = color;
    appContext.fill();
}

const drawLine = (x1, y1, x2, y2) => {
    appContext.beginPath();
    appContext.moveTo(x1,y1);
    appContext.lineTo(x2,y2);
    appContext.strokeStyle = color;
    appContext.lineWidth = size * 2;
    appContext.stroke();
}

const updateSizeOnScreen = () => {
    sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", () => {
    size +=5;
    if(size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
    size -=5;
    if(size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
});

colorEl.addEventListener("change", e => color = e.target.value);

clearEl.addEventListener("click", () => appContext.clearRect(0,0, canvas.width, canvas.height));