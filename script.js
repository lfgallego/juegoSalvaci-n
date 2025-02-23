const images = {
    1: { src: 'https://drive.google.com/uc?export=view&id=1iOhQ2gdkXpPp7C576kHivMZczEidAj5c' },
    2: { src: 'https://drive.google.com/uc?export=view&id=1KfR3LgapJwKugVKR6-bi32NEDtF8881p' },
    3: { src: 'https://drive.google.com/uc?export=view&id=1MO40p_gUPjd6uma3eafPINhqAYdE3I0T' },
    4: { src: 'https://drive.google.com/uc?export=view&id=1oajmDIRnfeXbOrbruDczImD3lzVnSqRe' },
    5: { src: 'https://drive.google.com/uc?export=view&id=1AixNZQsQaENNOFLMs4-AMlSCjKf31Zmn' },
    6: { src: 'https://drive.google.com/uc?export=view&id=1qKOiyzZbUzdW7fUZdi46Z7Tv4z5FBq9P' },
    7: { src: 'https://drive.google.com/uc?export=view&id=1u-7KPO4KB9uyQ_ZJqSTI2IRi7sM-yief' },
    8: { src: 'https://drive.google.com/uc?export=view&id=1Ty8st7x1kQ2ptshB5MGv8dVCb5tDN_Bi' },
    9: { src: 'https://drive.google.com/uc?export=view&id=1SmodwmCe3hrOKVVOu22eWQROSanQNMOs' }
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

