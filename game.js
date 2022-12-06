const canvas = document.querySelector('#game');
/* Llamar al metodo get context de canvas definimos que es en 2D */
const game = canvas.getContext('2d');
// Botones
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRigth = document.querySelector('#right');
const btnDown = document.querySelector('#down');
// Variables globales
let canvasSize;
let elementsSize;
// Player
const playerPosition = {
    x: undefined,
    y: undefined
}

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
    // limpiamos el string con trim y slipt para separarlo por saltos de linea
    const mapRows = map.trim().split('\n');
    //console.log(mapRows);
    // por cada fila, la volvemos a separar y limpiar, se comvierte en un array de arrays
    const mapRowsCols = mapRows.map(row => row.trim().split(''))
    //console.log(mapCols);
    // Limpiar mapa anterior
    game.clearRect(0, 0, canvasSize, canvasSize)
    // Solucion con forEach
    mapRowsCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            //console.log({ row, rowI, col, colI });
            // console.log(emojis[col]);
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            // Establecer posicion del jugador
            if (col == 'O') {
                if (!playerPosition.x && !playerPosition.y) {
                    //console.log({ posX, posY }); --> Posicion iniclal del jugador
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    //console.log({ playerPosition });
                }
            }
            // La claberita
            game.fillText(emoji, posX, posY);
        })
    });

    movePlayer()
    //Solucion con ciclo for
    /* for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapRowsCols[row - 1][col - 1]], elementsSize * col, elementsSize * row)
        }
    } */
}

function movePlayer() {
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

// Escuchar tecla presionada
window.addEventListener('keydown', moveByKeys)
// Dando click en los botones
btnUp.addEventListener('click', moveUp)
btnLeft.addEventListener('click', moveLeft)
btnRigth.addEventListener('click', moveRight)
btnDown.addEventListener('click', moveDown)

function moveByKeys(event) {
    //console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            moveUp()
            break;
        case 'ArrowLeft':
            moveLeft()
            break;
        case 'ArrowRight':
            moveRight()
            break;
        case 'ArrowDown':
            moveDown()
            break;
    }
}
function moveUp() {
    //console.log('Me quiero mover hacia arriba');
    //Para no salirnos del mapa 
    if ((playerPosition.y - elementsSize) < 0) {
        console.log('OUT');
    } else {
        playerPosition.y -= elementsSize
        startGame()
    }
}
function moveLeft() {
    //console.log('Me quiero mover hacia izquierda');
    //Para no salirnos del mapa 
    if ((playerPosition.x - elementsSize) <= 0) {
        console.log('OUT');
    } else {
        playerPosition.x -= elementsSize
        startGame()
    }
}
function moveRight() {
    //console.log('Me quiero mover hacia derecha');
    if ((playerPosition.x + elementsSize) > canvasSize) {
        console.log('OUT');
    } else {
        playerPosition.x += elementsSize
        startGame()
    }
}
function moveDown() {
    //console.log('Me quiero mover hacia abajo');
    if ((playerPosition.y + elementsSize) > canvasSize) {
        console.log('OUT');
    } else {
        playerPosition.y += elementsSize
        startGame()
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