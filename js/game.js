const initialInputGame = [
    [
        { id: 1, colum: 1, file: 1, status: 'alive' },
        { id: 2, colum: 1, file: 2, status: 'alive' },
        { id: 3, colum: 1, file: 3, status: 'dead' },
        { id: 4, colum: 1, file: 4, status: 'dead' },
        { id: 5, colum: 1, file: 5, status: 'dead' },
        { id: 6, colum: 1, file: 6, status: 'alive' },
    ],
    [
        { id: 7, colum: 2, file: 1, status: 'dead' },
        { id: 8, colum: 2, file: 2, status: 'alive' },
        { id: 9, colum: 2, file: 3, status: 'dead' },
        { id: 10, colum: 2, file: 4, status: 'dead' },
        { id: 11, colum: 2, file: 5, status: 'alive' },
        { id: 12, colum: 2, file: 6, status: 'alive' },
    ],
    [
        { id: 13, colum: 3, file: 1, status: 'dead' },
        { id: 14, colum: 3, file: 2, status: 'dead' },
        { id: 15, colum: 3, file: 3, status: 'dead' },
        { id: 16, colum: 3, file: 4, status: 'dead' },
        { id: 17, colum: 3, file: 5, status: 'alive' },
        { id: 18, colum: 3, file: 6, status: 'alive' },
    ],
    [
        { id: 19, colum: 4, file: 1, status: 'dead' },
        { id: 20, colum: 4, file: 2, status: 'alive' },
        { id: 21, colum: 4, file: 3, status: 'dead' },
        { id: 22, colum: 4, file: 4, status: 'dead' },
        { id: 23, colum: 4, file: 5, status: 'dead' },
        { id: 14, colum: 4, file: 6, status: 'alive' },
    ],
    [
        { id: 25, colum: 5, file: 1, status: 'dead' },
        { id: 26, colum: 5, file: 2, status: 'dead' },
        { id: 27, colum: 5, file: 3, status: 'alive' },
        { id: 28, colum: 5, file: 4, status: 'dead' },
        { id: 29, colum: 5, file: 5, status: 'alive' },
        { id: 30, colum: 5, file: 6, status: 'dead' },
    ],
    [
        { id: 31, colum: 6, file: 1, status: 'dead' },
        { id: 32, colum: 6, file: 2, status: 'alive' },
        { id: 33, colum: 6, file: 3, status: 'dead' },
        { id: 34, colum: 6, file: 4, status: 'alive' },
        { id: 35, colum: 6, file: 5, status: 'alive' },
        { id: 36, colum: 6, file: 6, status: 'dead' },
    ],
];

const createLine = (element) => {
    let eachItem = '';
    element.forEach((item) => {
        if (item.status === 'alive') {
            eachItem += '😋';
        }
        if (item.status === 'dead') {
            eachItem += '❌';
        }
    });
    console.table(eachItem);
    return createLine;
};

const createGame = () => {
    for (let i = 0; i < initialInputGame.length; i++) {
        createLine(initialInputGame[i]);
    }
};

const checkViability = (input) => {
    let numberOfAdjacent = 0;
    let adjacent1;
    let adjacent2;
    let adjacent3;
    let adjacent4;
    let adjacent5;
    let adjacent6;
    let adjacent7;
    let adjacent8;

    for (let i = 0; i < initialInputGame.length; i++) {
        if (
            (adjacent1 = initialInputGame[i].find(
                (file) => file.id === input.id - 6
            ))
        ) 

    if (numberOfAdjacent < 2) {
        return 'dead';
    }
    if (numberOfAdjacent > 3) {
        return 'dead';
    }
    if (numberOfAdjacent === 2 || numberOfAdjacent === 3) {
        return 'alive';
    }
};

const checkGameViability = (counter) => {
    for (let i = 0; i < initialInputGame.length; i++) {
        for (let j = 0; j < initialInputGame.length; j++) {
            initialInputGame[i][j].status = checkViability(
                initialInputGame[i][j]
            );
        }
        console.log(`ronda nº ${counter}`);
        createGame(initialInputGame);
    }
};

const startGame = () => {
    let counter = 0;
    setInterval(() => {
        counter++;
        checkGameViability(counter);
    }, 1000);
};

startGame();
