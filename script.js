const images = {
    1: { src: 'https://imgur.com/QFHp5ym' },
    2: { src: 'https://imgur.com/XLxDij9' },
    3: { src: 'https://imgur.com/vG0nffF' },
    4: { src: 'https://imgur.com/IAl0pQH' },
    5: { src: 'https://imgur.com/qKZXV9V' },
    6: { src: 'https://imgur.com/59gSuPz' },
    7: { src: 'https://imgur.com/wOp2Aom' },
    8: { src: 'https://imgur.com/FnVLlel' },
    9: { src: 'https://imgur.com/bEeUP9n' }
};

const gameBoard = document.getElementById('gameBoard');

for (let i = 1; i <= 9; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;
    
    let img = document.createElement('img');
    img.src = images[i].src;
    img.alt = `Imagen ${i}`;
    img.style.display = 'none'; // Inicialmente oculto

    cell.appendChild(img);
    
    cell.addEventListener('click', function () {
        if (img.style.display === 'none') {
            img.style.display = 'block';
            cell.textContent = ''; // Oculta el número
        }
    });

    gameBoard.appendChild(cell);
}

