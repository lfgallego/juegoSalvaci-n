const images = [
    'https://i.imgur.com/QFHp5ym.jpeg',
    'https://i.imgur.com/XLxDij9.jpeg',
    'https://i.imgur.com/vG0nffF.jpeg',
    'https://i.imgur.com/IAl0pQH.jpeg',
    'https://i.imgur.com/qKZXV9V.jpeg',
    'https://i.imgur.com/59gSuPz.jpeg',
    'https://i.imgur.com/wOp2Aom.jpeg',
    'https://i.imgur.com/FnVLlel.jpeg',
    'https://i.imgur.com/bEeUP9n.jpeg'
];

const gameBoard = document.getElementById('gameBoard');

gameBoard.innerHTML = ""; // Limpia el tablero antes de agregar celdas

for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    
    let img = document.createElement('img');
    img.src = images[i];
    img.alt = `Imagen ${i + 1}`;
    img.style.display = 'none'; // Ocultar la imagen inicialmente

    let numberText = document.createElement('span');
    numberText.textContent = i + 1;

    cell.appendChild(numberText);
    cell.appendChild(img);
    
    cell.addEventListener('click', function () {
        if (img.style.display === 'none') {
            img.style.display = 'block'; // Muestra la imagen
            numberText.style.display = 'none'; // Oculta el número
        }
    });

    gameBoard.appendChild(cell);
}

