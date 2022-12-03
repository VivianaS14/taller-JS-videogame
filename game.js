const canvas = document.querySelector('#game');
/* Llamar al metodo get context de canvas definimos que es en 2D */
const game = canvas.getContext('2d');
// Variables globales
let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    // Mismo cuadrado responsive
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.758;
    } else {
        canvasSize = window.innerHeight * 0.758
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    elementsSize = canvasSize / 10;
    startGame();
}

function startGame() {
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    // Array bidimensional
    const map = maps[0];
    const mapRows = map.trim().split('\n');
    //console.log(mapRows);
    const mapRowsCols = mapRows.map(row => row.trim().split(''))
    //console.log(mapCols);

    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapRowsCols[row - 1][col - 1]], elementsSize * col, elementsSize * row)
        }
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