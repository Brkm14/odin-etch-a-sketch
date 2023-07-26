const container = document.querySelector('.grid-container');

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    square.addEventListener('mouseover', () => {
        square.classList.add('active'); // Apply new color on mouseover
    });
    container.appendChild(square);
}

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
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.addEventListener('mouseover', () => {
            square.classList.add('active'); // Apply new color on mouseover
        });
        container.appendChild(square);
    }
}

// Call the createNewGrid function when the "New Grid" button is clicked
const newGridButton = document.getElementById('new-grid-btn');
newGridButton.addEventListener('click', createNewGrid);

// Clear the drawing area when the "Clear" button is clicked
const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.classList.remove('active'); // Clear the drawing area
    });
});


