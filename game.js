const canvas = document.querySelector('#game');
/* Llamar al metodo get context de canvas definimos que es en 2D */
const game = canvas.getContext('2d');
// Variables globales
let canvasSize;
let elementsSize;


window.addEventListener('resize', setCanvasSize);
window.addEventListener('load', setCanvasSize);

function setCanvasSize() {
    // Mismo cuadrado responsive
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    elementsSize = canvasSize / 10;
    startGame();
}

function startGame() {
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 0; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize, elementsSize * i)
    }

}

//----------------------------------------------------
// Tamaño del canvas
//window.innerHeight
//window.innerWidth

// Dibujamos ( ejeX, ejeY, width W, heigth H)
//game.fillRect(0, 50, 100, 100);
//game.clearRect(50, 50, 50, 100);
//game.clearRect(0, 0, 50, 50);

//game.font = '25px Verdana';
//game.fillStyle = 'purple';
//game.textAlign = 'end';
//game.fillText('Platzi', 25, 25);