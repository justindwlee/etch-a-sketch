//Create default board

let board = document.querySelector('.board');

board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

function turnBlack(event) {
    if (event.buttons === 1)
        event.target.style.backgroundColor = 'black';
}

for (let i = 0; i < 16; i++)
    for (let j = 0; j < 16; j++) {
        let pixel = document.createElement('div');

        pixel.addEventListener('mouseenter', turnBlack);

        board.insertAdjacentElement('beforeend', pixel);
    }


//Make the coloring black when clicking black button

const blackButton = document.querySelector('.black-button');
blackButton.addEventListener('click', function() {
    let pixels = board.querySelectorAll('div');
    pixels.forEach((pixel) => {
        pixel.removeEventListener('mouseenter', turnWhite);
        pixel.removeEventListener('mouseenter', turnAqua);
        pixel.removeEventListener('mouseenter', turnRandom);
        pixel.addEventListener('mouseenter', turnBlack);
    })
})

//Make the coloring Aqua when clicking aqua button

function turnAqua(event) {
    if (event.buttons === 1) {
        event.target.style.backgroundColor = 'aqua';
    }
}

const aquaButton = document.querySelector('.aqua-button');
aquaButton.addEventListener('click', function() {
    let pixels = board.querySelectorAll('div');
    pixels.forEach((pixel) => {
        pixel.removeEventListener('mouseenter', turnWhite);
        pixel.removeEventListener('mouseenter', turnBlack);
        pixel.removeEventListener('mouseenter', turnRandom);
        pixel.addEventListener('mouseenter', turnAqua);
    })
})



//Activating Random Button

function turnRandom(event) {
    if (event.buttons === 1) {
        let randomColor = generateRandomRGB();
        event.target.style.cssText = `background-color: rgba${randomColor}`;       
    }
}

function generateRandomRGB() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);

    return `(${R},${G},${B})`;
}

const randomButton = document.querySelector('.random-button');
randomButton.addEventListener('click', function() {
    let pixels = board.querySelectorAll('div');
    pixels.forEach((pixel) => {
        pixel.removeEventListener('mouseenter', turnWhite);
        pixel.removeEventListener('mouseenter', turnBlack);
        pixel.removeEventListener('mouseenter', turnAqua);
        pixel.addEventListener('mouseenter', turnRandom);
    })
})

//Activating Eraser Button

function turnWhite(event) {
    if (event.buttons === 1)
        event.target.style.backgroundColor = 'white';
}

const eraserButton = document.querySelector('.eraser-button');
eraserButton.addEventListener('click', function() {
    let pixels = board.querySelectorAll('div');
    pixels.forEach((pixel) => {
        pixel.removeEventListener('mouseenter', turnRandom);
        pixel.removeEventListener('mouseenter', turnBlack);
        pixel.removeEventListener('mouseenter', turnAqua);
        pixel.addEventListener('mouseenter', turnWhite);
    })
})

//Clear the board when clicking Clear Board Button

function clearBoard() {
    let pixels = board.querySelectorAll('div');

    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white';
    })
}

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearBoard)