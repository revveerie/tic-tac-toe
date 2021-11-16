// html variables
let resetButton = document.querySelector('.controlls__reset'),
    settingsButton = document.querySelector('.controlls__settings'),
    fieldItems = document.querySelectorAll('.board__item'),
    oTurn = document.querySelector('.turn__image_white-o'),
    xTurn = document.querySelector('.turn__image_white-x'),
    turnIndicate = document.querySelector('.turn__indicate');

// game variables
let gameIsLive = true,
    xIsNext = true,
    winner = null,
    draw = true,
    funcCounter = 0;

// game result
const handleWinner = (letter) => {
    draw = false;
    gameIsLive = false;
    winner = letter;
    if (winner == 'x') {
        let xCounter = +document.querySelector('.count__x-output').textContent;
        xCounter ++;
        document.querySelector('.count__x-output').textContent = xCounter;
    } else if (winner == 'o') {
        let oCounter = +document.querySelector('.count__o-output').textContent;
        oCounter ++;
        document.querySelector('.count__o-output').textContent = oCounter;
    }
    setTimeout(() => {
        for (const fieldItem of fieldItems) {
            fieldItem.innerHTML = '';
            fieldItem.classList.remove('x');
            fieldItem.classList.remove('o');
        }
        draw = true;
        gameIsLive = true,
        xIsNext = true,
        winner = null;
        funcCounter = 0;
        turnIndicate.classList.remove('o-turn');
        turnIndicate.classList.add('x-turn');
        oTurn.classList.remove('is-turn');
        xTurn.classList.add('is-turn');
    }, 3000);
}

// check game status
const gameStatus = () => {
    const topLeft = fieldItems[0].classList[2];
    const topCenter = fieldItems[1].classList[2];
    const topRight = fieldItems[2].classList[2];
    const middleLeft = fieldItems[3].classList[2];
    const middleCenter = fieldItems[4].classList[2];
    const middleRight = fieldItems[5].classList[2];
    const bottomLeft = fieldItems[6].classList[2];
    const bottomCenter = fieldItems[7].classList[2];
    const bottomRight = fieldItems[8].classList[2];

    funcCounter ++;

    if (topLeft && topLeft === topCenter && topLeft === topRight) {
        handleWinner(topLeft);
    }
    else if (middleLeft && middleLeft === middleCenter && middleLeft === middleRight) {
        handleWinner(middleLeft);
    }
    else if (bottomLeft && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        handleWinner(bottomLeft);
    }
    else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWinner(topLeft);
    }
    else if (topCenter && topCenter === middleCenter && topCenter === bottomCenter) {
        handleWinner(topCenter);
    }
    else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWinner(topRight);
    }
    else if (topLeft && topLeft === middleCenter && topLeft === bottomRight) {
        handleWinner(topLeft);
    }
    else if (topRight && topRight === middleCenter && topRight == bottomLeft) {
        handleWinner(topRight);
    }
}

// reset the progress
const handlerReset = (e) => {
    for (const fieldItem of fieldItems) {
        fieldItem.innerHTML = '';
        fieldItem.classList.remove('x');
        fieldItem.classList.remove('o');
    }
    gameIsLive = true,
    xIsNext = true,
    winner = null;
    draw = true;
    funcCounter = 0;
    document.querySelector('.count__x-output').textContent = 0;
    document.querySelector('.count__o-output').textContent = 0;
    document.querySelector('.count__draws-output').textContent = 0;
    turnIndicate.classList.remove('o-turn');
    turnIndicate.classList.add('x-turn');
    oTurn.classList.remove('is-turn');
    xTurn.classList.add('is-turn');
}

// clicking board fields
const handleCellClick = (e) => {
    const location = e.target.classList[1];
    const classList = e.target.classList;

    if (classList[2] === 'x' || classList[2] === 'o') {
        return;
    }
    else {
        if (xIsNext) {
            e.target.innerHTML = '<img src="./img/x.png">';
            e.target.classList.add('x');
            turnIndicate.classList.toggle('o-turn');
            turnIndicate.classList.toggle('x-turn');
            oTurn.classList.toggle('is-turn');
            xTurn.classList.toggle('is-turn');
            gameStatus();
            if (funcCounter == 9 && draw == true) {
                let drawCounter = +document.querySelector('.count__draws-output').textContent;
                drawCounter ++;
                document.querySelector('.count__draws-output').textContent = drawCounter;
                setTimeout(() => {
                    for (const fieldItem of fieldItems) {
                        fieldItem.innerHTML = '';
                        fieldItem.classList.remove('x');
                        fieldItem.classList.remove('o');
                    }
                    draw = true;
                    gameIsLive = true,
                    xIsNext = true,
                    winner = null;
                    funcCounter = 0;
                    turnIndicate.classList.remove('o-turn');
                    turnIndicate.classList.add('x-turn');
                    oTurn.classList.remove('is-turn');
                    xTurn.classList.add('is-turn');
                }, 3000);
            }
            xIsNext = !xIsNext;
        }
        else {
            e.target.innerHTML = '<img src="./img/rec.png">';
            e.target.classList.add('o');
            turnIndicate.classList.toggle('o-turn');
            turnIndicate.classList.toggle('x-turn');
            oTurn.classList.toggle('is-turn');
            xTurn.classList.toggle('is-turn');
            gameStatus();
            if (funcCounter == 9 && draw == true) {
                let drawCounter = +document.querySelector('.count__draws-output').textContent;
                drawCounter ++;
                document.querySelector('.count__draws-output').textContent = drawCounter;
                setTimeout(() => {
                    for (const fieldItem of fieldItems) {
                        fieldItem.innerHTML = '';
                        fieldItem.classList.remove('x');
                        fieldItem.classList.remove('o');
                    }
                    draw = true;
                    gameIsLive = true,
                    xIsNext = true,
                    winner = null;
                    funcCounter = 0;
                    turnIndicate.classList.remove('o-turn');
                    turnIndicate.classList.add('x-turn');
                    oTurn.classList.remove('is-turn');
                    xTurn.classList.add('is-turn');
                }, 3000);
            }
            xIsNext = !xIsNext;
        }
    }
}

// clicking events
resetButton.addEventListener('click', handlerReset);

for (const fieldItem of fieldItems) {
    fieldItem.addEventListener('click', handleCellClick)
}