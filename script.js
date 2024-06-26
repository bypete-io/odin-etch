const canvas = document.querySelector('#canvas');



for (let i = 0; i < 16; i++) {
   const row = document.createElement('div');
   row.classList.add('row');
   canvas.appendChild(row);
   
    for (let j = 0; j < 16; j++) {
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