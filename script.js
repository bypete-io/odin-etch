const canvas = document.querySelector('#canvas');
const generate = document.querySelector('#generate');

function promptGridSize() {
    let size = prompt('Choose a grid size up to 100', "");

    if (size === null) {
        console.log('User canceled the prompt.');
        return; // Exit the function if the user cancels the prompt
    }

    let n = parseFloat(size);

    if (!isNaN(n) && n > 0 && n <= 100 && Number.isInteger(n)) {
        generateGrid(n);
    } else {
        promptGridSize();
    }

}


generate.addEventListener('click', promptGridSize)

function generateGrid(size = 16) {
canvas.textContent = "";
for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    canvas.appendChild(row);
    
     for (let j = 0; j < size; j++) {
         const square = document.createElement('div');
         square.classList.add('square');
         square.addEventListener('mouseenter', (e) => {
            let opacity = (parseFloat(square.dataset.opacity) || 0);
             const r = Math.floor(Math.random() * 256);
             const g = Math.floor(Math.random() * 256);
             const b = Math.floor(Math.random() * 256);
             if (opacity < 1) {
                 opacity = parseFloat((opacity + 0.1).toFixed(2));
             }
             square.dataset.opacity = opacity;
             square.style.backgroundColor = `rgba(${r},${g},${b}, ${opacity})`
         })
         row.appendChild(square)
     }    
 }
}

generateGrid()