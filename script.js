const container = document.querySelector('.grid-container');
const toggleGridButton = document.getElementById('toggle-grid-btn');
const rainbowButton = document.getElementById('rainbow-btn'); // Get the rainbow button element
let isRainbowMode = false; // Flag to indicate if rainbow mode is active


// for (let i = 0; i < 16 * 16; i++) {
//     const square = document.createElement('div');
//     square.classList.add('grid-item');
//     square.addEventListener('mouseover', () => {
//         square.classList.add('active'); // Apply new color on mouseover
//     });
//     container.appendChild(square);
// }

// Function to create a new grid based on user input
function createNewGrid() {
    // Prompt the user for the number of squares per side
    let squaresPerSide = prompt('Enter the number of squares per side (e.g. 16):');
    if (squaresPerSide === null) return; // Exit if user cancels or doesn't enter a value

    // Convert the user input to a valid integer
    squaresPerSide = parseInt(squaresPerSide);

    // Remove the existing grid
    container.innerHTML = '';


    // Create a new grid of square divs
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`; // Set number of columns

    createGrid(squaresPerSide, squaresPerSide);

    // for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    //     const square = document.createElement('div');
    //     square.classList.add('grid-item');
    //     container.appendChild(square);
    //     if(isRainbowMode){
    //         square.addEventListener('mouseover', () => {
    //             changeColorWithRainbowMode(square);
    //         });
    //     } else {
    //         square.addEventListener('mouseover', () => {
    //             square.classList.add('active'); // Apply new color on mouseover
    //         });
    //     }
        
        
    // }
}

// Call the createNewGrid function when the "New Grid" button is clicked
const newGridButton = document.getElementById('new-grid-btn');
newGridButton.addEventListener('click', createNewGrid);

// Clear the drawing area when the "Clear" button is clicked
const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white'; // Clear the drawing area
    });
});


function toggleGridLines() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.classList.toggle('hide-grid'); // Toggle the 'hide-grid' class
    });
}

toggleGridButton.addEventListener('click', toggleGridLines);





const eraserButton = document.getElementById('eraser-btn');
let isEraserMode = false;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleRainbowMode() {
    isRainbowMode = !isRainbowMode;
    if (isRainbowMode) {
        rainbowButton.classList.add('active');
        eraserButton.classList.remove('active');
        isEraserMode = false;
    } else {
        rainbowButton.classList.remove('active');
    }
}

function toggleEraserMode() {
    isEraserMode = !isEraserMode;
    if (isEraserMode) {
        eraserButton.classList.add('active');
        rainbowButton.classList.remove('active');
        isRainbowMode = false;
    } else {
        eraserButton.classList.remove('active');
    }
}

function changeColorWithRainbowMode(item) {
    if (isRainbowMode) {
        item.style.backgroundColor = getRandomColor(); // Set the background color to a random color
    } else if (isEraserMode) {
        item.style.backgroundColor = ''; // Erase the color by removing the background color
        item.classList.remove('active'); // Remove the 'active' class to clear the color
    } else {
        item.style.backgroundColor = ''; // Remove the background color when rainbow mode and eraser mode are off
        item.classList.add('active');
    }
}

function createGrid(rows, cols) {
    container.innerHTML = ''; // Clear the existing grid
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            changeColorWithRainbowMode(square);
        });
    }
}

// Initial grid creation (16x16)
createGrid(16, 16);

// Assign toggleRainbowMode function to the "Rainbow" button click event
rainbowButton.addEventListener('click', toggleRainbowMode);

// Assign toggleEraserMode function to the "Eraser" button click event
eraserButton.addEventListener('click', toggleEraserMode);


