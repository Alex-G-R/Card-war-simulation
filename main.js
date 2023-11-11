let liczbaTur = [];

let tripleBattleCount = 0;
let playerOneWinCount = 0;
let playerTwoWinCount = 0;
let drawCount = 0;
let imposible = 0;

for (let i = 0; i < 500; i++) {

    // Talia kart
    let mainArray = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13];

    let playerOneArray = [14];
    let playerTwoArray = [14];

    let tury = 0;

    shuffle(mainArray);
    console.log(mainArray);

    for (let i = 0; i < mainArray.length; i++) {
        if (i % 2 == 0) {
            playerOneArray.push(mainArray[i]);
        } else if (i % 2 == 1) {
            playerTwoArray.push(mainArray[i]);
        } else {
            console.log("Unexpected error line 17");
        }
    }

    shuffle(playerOneArray);
    shuffle(playerTwoArray);

    console.log(`Array one ${playerOneArray}, lenght = ${playerTwoArray.length}`);
    console.log(`Array two ${playerTwoArray}, lenght = ${playerTwoArray.length}`);

    let status = true;
    while (status) {
        gameLoop();
    }


    function gameLoop() {

        if(tury % 6000 == 0){
            shuffle(playerOneArray);
            shuffle(playerTwoArray);
        }

        tury++;

        if (playerOneArray.length == 0 || playerTwoArray.length == 0) {
            if (playerOneArray.length == 0) {
                console.log("Game ended, player two won");
                status = false;
                console.log(`Liczba tur = ${tury}`)
                liczbaTur.push(tury);
                playerOneWinCount++;
            }
            if (playerTwoArray.length == 0) {
                console.log("Game ended, player one won");
                status = false;
                console.log(`Liczba tur = ${tury}`)
                liczbaTur.push(tury);
                playerTwoWinCount++;
            }
        }

        // player one wins, take the cards and push them to player one
        if (playerOneArray[0] > playerTwoArray[0]) {
            console.log(`Before battle - Player One Won the battle \n Player one: ${playerOneArray} \n Player two: ${playerTwoArray}\n  `)
            let tempArray = [];

            let tempA = playerOneArray[0];
            let tempB = playerTwoArray[0];
            playerOneArray.shift();
            playerTwoArray.shift();

            tempArray.push(tempA);
            tempArray.push(tempB);

            for (let i = 0; i < tempArray.length; i++) {
                playerOneArray.push(tempArray[i]);
            }

            console.log(`After battle - Player One Won the battle \n Player one: ${playerOneArray} \n Player two: ${playerTwoArray} \n \n`)

        } // player two wins, take the cards and push them to player two 
        else if (playerOneArray[0] < playerTwoArray[0]) {
            console.log(`Before battle - Player Two Won the battle \n Player one: ${playerOneArray} \n Player two: ${playerTwoArray} \n`)
            let tempArray = [];

            let tempA = playerOneArray[0];
            let tempB = playerTwoArray[0];
            playerOneArray.shift();
            playerTwoArray.shift();

            tempArray.push(tempA);
            tempArray.push(tempB);

            for (let i = 0; i < tempArray.length; i++) {
                playerTwoArray.push(tempArray[i]);
            }


            console.log(`After battle - Player Two Won the battle \n Player one: ${playerOneArray} \n Player two: ${playerTwoArray} \n \n`)
        }

        if (playerOneArray[0] == playerTwoArray[0]) {
            // player one wins the battle
            if (playerOneArray.length < 3) {
                console.log("Player two won");
                status = false;
                console.log(`Liczba tur = ${tury}`)
                liczbaTur.push(tury);
                playerOneWinCount++;
            }
            if (playerTwoArray.length < 3) {
                console.log("Player one won");
                status = false;
                console.log(`Liczba tur = ${tury}`)
                liczbaTur.push(tury);
                playerTwoWinCount++;
            }

            if (playerOneArray[2] > playerTwoArray[2]) {
                let tempArray = [];

                let tempA1 = playerOneArray[0];
                let tempA2 = playerOneArray[1];
                let tempA3 = playerOneArray[2];

                let tempB1 = playerTwoArray[0];
                let tempB2 = playerTwoArray[1];
                let tempB3 = playerTwoArray[2];

                playerOneArray.shift();
                playerOneArray.shift();
                playerOneArray.shift();

                playerTwoArray.shift();
                playerTwoArray.shift();
                playerTwoArray.shift();

                tempArray.push(tempA1);
                tempArray.push(tempA2);
                tempArray.push(tempA3);
                tempArray.push(tempB1);
                tempArray.push(tempB2);
                tempArray.push(tempB3);

                shuffle(tempArray);

                for (let i = 0; i < tempArray.length; i++) {
                    playerOneArray.push(tempArray[i]);
                }

                console.log("P1 wins the real battle")
            }// player two wins the battle
            else if (playerOneArray[2] < playerTwoArray[2]) {
                let tempArray = [];

                let tempA1 = playerOneArray[0];
                let tempA2 = playerOneArray[1];
                let tempA3 = playerOneArray[2];

                let tempB1 = playerTwoArray[0];
                let tempB2 = playerTwoArray[1];
                let tempB3 = playerTwoArray[2];

                playerOneArray.shift();
                playerOneArray.shift();
                playerOneArray.shift();

                playerTwoArray.shift();
                playerTwoArray.shift();
                playerTwoArray.shift();

                tempArray.push(tempA1);
                tempArray.push(tempA2);
                tempArray.push(tempA3);
                tempArray.push(tempB1);
                tempArray.push(tempB2);
                tempArray.push(tempB3);

                shuffle(tempArray);

                for (let i = 0; i < tempArray.length; i++) {
                    playerTwoArray.push(tempArray[i]);
                }

                console.log("P2 wins the real battle")
            } else if (playerOneArray[2] == playerTwoArray[2]) {
                if (playerOneArray.length < 6) {
                    console.log("Player two won");
                    status = false;
                    console.log(`Liczba tur = ${tury}`)
                    liczbaTur.push(tury);
                    playerOneWinCount++;
                }
                if (playerTwoArray.length < 6) {
                    console.log("Player one won");
                    status = false;
                    console.log(`Liczba tur = ${tury}`)
                    liczbaTur.push(tury);
                    playerTwoWinCount++;
                }

                if (playerOneArray[5] > playerTwoArray[5]) {
                    let tempArray = [];

                    let tempA1 = playerOneArray[0];
                    let tempA2 = playerOneArray[1];
                    let tempA3 = playerOneArray[2];
                    let tempA4 = playerOneArray[3];
                    let tempA5 = playerOneArray[4];
                    let tempA6 = playerOneArray[5];

                    let tempB1 = playerTwoArray[0];
                    let tempB2 = playerTwoArray[1];
                    let tempB3 = playerTwoArray[2];
                    let tempB4 = playerTwoArray[3];
                    let tempB5 = playerTwoArray[4];
                    let tempB6 = playerTwoArray[5];

                    playerOneArray.shift();
                    playerOneArray.shift();
                    playerOneArray.shift();
                    playerOneArray.shift();
                    playerOneArray.shift();
                    playerOneArray.shift();

                    playerTwoArray.shift();
                    playerTwoArray.shift();
                    playerTwoArray.shift();
                    playerTwoArray.shift();
                    playerTwoArray.shift();
                    playerTwoArray.shift();

                    tempArray.push(tempA1);
                    tempArray.push(tempA2);
                    tempArray.push(tempA3);
                    tempArray.push(tempA4);
                    tempArray.push(tempA5);
                    tempArray.push(tempA6);
                    tempArray.push(tempB1);
                    tempArray.push(tempB2);
                    tempArray.push(tempB3);
                    tempArray.push(tempB4);
                    tempArray.push(tempB5);
                    tempArray.push(tempB6);

                    shuffle(tempArray);

                    for (let i = 0; i < tempArray.length; i++) {
                        playerOneArray.push(tempArray[i]);
                    }

                    console.log("P1 wins the real battle 3")
                }// player two wins the battle 2
                else if (playerOneArray[5] < playerTwoArray[5]) {
                    let tempArray = [];

                    let tempA1 = playerOneArray[0];
                    let tempA2 = playerOneArray[1];
                    let tempA3 = playerOneArray[2];
                    let tempA4 = playerOneArray[3];
                    let tempA5 = playerOneArray[4];
                    let tempA6 = playerOneArray[5];

                    let tempB1 = playerTwoArray[0];
                    let tempB2 = playerTwoArray[1];
                    let tempB3 = playerTwoArray[2];
                    let tempB4 = playerTwoArray[3];
                    let tempB5 = playerTwoArray[4];
                    let tempB6 = playerTwoArray[5];

                    playerOneArray.shift();
                    playerOneArray.shift();
                    playerOneArray.shift();
                    playerOneArray.shift();
                    playerOneArray.shift();
                    playerOneArray.shift();

                    playerTwoArray.shift();
                    playerTwoArray.shift();
                    playerTwoArray.shift();
                    playerTwoArray.shift();
                    playerTwoArray.shift();
                    playerTwoArray.shift();

                    tempArray.push(tempA1);
                    tempArray.push(tempA2);
                    tempArray.push(tempA3);
                    tempArray.push(tempA4);
                    tempArray.push(tempA5);
                    tempArray.push(tempA6);
                    tempArray.push(tempB1);
                    tempArray.push(tempB2);
                    tempArray.push(tempB3);
                    tempArray.push(tempB4);
                    tempArray.push(tempB5);
                    tempArray.push(tempB6);

                    shuffle(tempArray);

                    for (let i = 0; i < tempArray.length; i++) {
                        playerTwoArray.push(tempArray[i]);
                    }

                    console.log("P2 wins the real battle 3")
                }

                else if (playerOneArray[5] == playerTwoArray[5]) {
                    if (playerOneArray.length < 9) {
                        console.log("Player two won");
                        status = false;
                        console.log(`Liczba tur = ${tury}`)
                        liczbaTur.push(tury);
                        playerOneWinCount++;
                    }
                    if (playerTwoArray.length < 9) {
                        console.log("Player one won");
                        status = false;
                        console.log(`Liczba tur = ${tury}`)
                        liczbaTur.push(tury);
                        playerTwoWinCount++;
                    }

                   
                    if (playerOneArray[8] > playerTwoArray[8]) {
                        let tempArray = [];
    
                        let tempA1 = playerOneArray[0];
                        let tempA2 = playerOneArray[1];
                        let tempA3 = playerOneArray[2];
                        let tempA4 = playerOneArray[3];
                        let tempA5 = playerOneArray[4];
                        let tempA6 = playerOneArray[5];
                        let tempA7 = playerOneArray[6];
                        let tempA8 = playerOneArray[7];
                        let tempA9 = playerOneArray[8];
    
                        let tempB1 = playerTwoArray[0];
                        let tempB2 = playerTwoArray[1];
                        let tempB3 = playerTwoArray[2];
                        let tempB4 = playerTwoArray[3];
                        let tempB5 = playerTwoArray[4];
                        let tempB6 = playerTwoArray[5];
                        let tempB7 = playerTwoArray[6];
                        let tempB8 = playerTwoArray[7];
                        let tempB9 = playerTwoArray[8];
    
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
    
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
    
                        tempArray.push(tempA1);
                        tempArray.push(tempA2);
                        tempArray.push(tempA3);
                        tempArray.push(tempA4);
                        tempArray.push(tempA5);
                        tempArray.push(tempA6);
                        tempArray.push(tempA7);
                        tempArray.push(tempA8);
                        tempArray.push(tempA9);
                        tempArray.push(tempB1);
                        tempArray.push(tempB2);
                        tempArray.push(tempB3);
                        tempArray.push(tempB4);
                        tempArray.push(tempB5);
                        tempArray.push(tempB6);
                        tempArray.push(tempB7);
                        tempArray.push(tempB8);
                        tempArray.push(tempB9);
    
                        shuffle(tempArray);
    
                        for (let i = 0; i < tempArray.length; i++) {
                            playerOneArray.push(tempArray[i]);
                        }
    
                        console.log("P1 wins the real battle 4")
                    } 
                    else if (playerOneArray[8] > playerTwoArray[8]) {
                        let tempArray = [];
    
                        let tempA1 = playerOneArray[0];
                        let tempA2 = playerOneArray[1];
                        let tempA3 = playerOneArray[2];
                        let tempA4 = playerOneArray[3];
                        let tempA5 = playerOneArray[4];
                        let tempA6 = playerOneArray[5];
                        let tempA7 = playerOneArray[6];
                        let tempA8 = playerOneArray[7];
                        let tempA9 = playerOneArray[8];
    
                        let tempB1 = playerTwoArray[0];
                        let tempB2 = playerTwoArray[1];
                        let tempB3 = playerTwoArray[2];
                        let tempB4 = playerTwoArray[3];
                        let tempB5 = playerTwoArray[4];
                        let tempB6 = playerTwoArray[5];
                        let tempB7 = playerTwoArray[6];
                        let tempB8 = playerTwoArray[7];
                        let tempB9 = playerTwoArray[8];
    
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
                        playerOneArray.shift();
    
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
                        playerTwoArray.shift();
    
                        tempArray.push(tempA1);
                        tempArray.push(tempA2);
                        tempArray.push(tempA3);
                        tempArray.push(tempA4);
                        tempArray.push(tempA5);
                        tempArray.push(tempA6);
                        tempArray.push(tempA7);
                        tempArray.push(tempA8);
                        tempArray.push(tempA9);
                        tempArray.push(tempB1);
                        tempArray.push(tempB2);
                        tempArray.push(tempB3);
                        tempArray.push(tempB4);
                        tempArray.push(tempB5);
                        tempArray.push(tempB6);
                        tempArray.push(tempB7);
                        tempArray.push(tempB8);
                        tempArray.push(tempB9);
    
                        shuffle(tempArray);
    
                        for (let i = 0; i < tempArray.length; i++) {
                            playerTwoArray.push(tempArray[i]);
                        }
    
                        console.log("P1 wins the real battle 4")
                    } else if(playerOneArray[8] == playerTwoArray[8]) {
                        imposible++;
                        status = false;
                        console.log(`Liczba tur = ${tury}`)
                        liczbaTur.push(tury);
                        drawCount++;
                    }
                }
            }
        }
    }



    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }
}

let sumaTur = 0;
let bigger6 = 0;
let bigger12 = 0;

for (let i = 0; i < liczbaTur.length; i++) {
    sumaTur += liczbaTur[i];
    if(liczbaTur[i] > 6000 && liczbaTur[i] < 12000){
        bigger6++;
    }
    if(liczbaTur[i] > 12000){
        bigger12++;
    }
}

console.log(`Suma tur ${sumaTur}`);
console.log(`Srednia liczba tur ${sumaTur / 500}`);
console.log(`liczba gier ponizej 6k tur ${liczbaTur.length - bigger6 - bigger12}`);
console.log(`liczba gier 6-12k tur ${bigger6}`);
console.log(`liczba gier powyzej 12k tur ${bigger12}`);
console.log(`liczba gier zakonczonych przez potrojna bitwe: ${tripleBattleCount}`);
console.log(`liczba wygranych player1 ${playerOneWinCount}`);
console.log(`liczba wygranych player2 ${playerTwoWinCount}`);
console.log(`liczba remisow ${drawCount}`);
console.log(`liczba impossible ${imposible}`);

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(Math.random() * arr.length)];

    const less = [];
    const equal = [];
    const greater = [];

    for (const element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }

    return [...quickSort(less), ...equal, ...quickSort(greater)];
}

const sortedArray = quickSort(liczbaTur);
console.log(sortedArray);