//! Rolled Displayed Class Sets
roll1 = 'rolledD1';
roll2 = 'rolledD2';
roll3 = 'rolledD3';
roll4 = 'rolledD4';
roll5 = 'rolledD5';
roll6 = 'rolledD6';


cup = document.getElementById('cupRoll');
d6One = document.getElementById('d6One');
d6Two = document.getElementById('d6Two');
d6Three = document.getElementById('d6Three');
d6Four = document.getElementById('d6Four');
d6Five = document.getElementById('d6Five');
// allDice = document.getElementsByClassName('diceSize');

// bankValue = document.getElementById('bankedRolls');
bankBtn = document.getElementById('bankRollbtn');
currentRoll = document.getElementById('totalRoll');

playerForm = document.getElementById('playerCountForm');
playerCountBtn = document.getElementById('playerBtn');
playerTable = document.getElementById('showTable');
tableBody = document.getElementById('playerTableBody');

//! Event Listeners
cup.addEventListener('click', cupRoll);
// d6One.addEventListener('click', singleRoll);
// d6Two.addEventListener('click', singleRoll);
// d6Three.addEventListener('click', singleRoll);
// d6Four.addEventListener('click', singleRoll);
// d6Five.addEventListener('click', singleRoll);
// bankBtn.addEventListener('click', bankCount);
bankBtn.addEventListener('click', function () {
    bankCount(turnPos);
});

playerCountBtn.addEventListener('click', playerStats);

//! Empty Variables
let dOne;
let dTwo;
let dThree;
let dFour;
let dFive;
let playerBuild = [];
let isPlayerTurn;
let turnPos;

//! PLAYER SETUP

function playerStats() {
    event.preventDefault();
    let playerCheck;

    playerForm[0].checked === true ? playerCheck = 1 :
        playerForm[1].checked === true ? playerCheck = 2 :
            playerForm[2].checked === true ? playerCheck = 3 :
                playerForm[3].checked === true ? playerCheck = 4 :
                    null;

    function createElements(numOfPlayers, idName, rowID, forTurns) {
        let row = document.createElement('tr');
        let head = document.createElement('th');
        let data = document.createElement('td');

        row.id = rowID;
        head.innerText = numOfPlayers;
        row.className = 'playersSet';
        data.className = 'scoreCountValue'
        data.id = idName;
        data.innerText = 0;

        tableBody.appendChild(row);
        row.appendChild(head);
        row.appendChild(data);

        playerBuild.push(forTurns);
    };

    if (playerCheck === 1) {
        createElements('Player One', 'p1', 'p1Row', 1);
        createElements('Player One Again!', 'p2', 'p2Row', 2);
        console.log(playerBuild);
    } else if (playerCheck === 2) {
        createElements('Player One', 'p1', 'p1Row', 1);
        createElements('Player Two', 'p2', 'p2Row', 2);
        console.log(playerBuild);
    } else if (playerCheck === 3) {
        createElements('Player One', 'p1', 'p1Row', 1);
        createElements('Player Two', 'p2', 'p2Row', 2);
        createElements('Player Three', 'p3', 'p3Row', 3);
        console.log(playerBuild);
    } else if (playerCheck === 4) {
        createElements('Player One', 'p1', 'p1Row', 1);
        createElements('Player Two', 'p2', 'p2Row', 2);
        createElements('Player Three', 'p3', 'p3Row', 3);
        createElements('Player Four', 'p4', 'p4Row', 4);
        console.log(playerBuild);
    } else {
        null
    }

    playerForm.style = 'display: none';
    playerTable.style = 'visibility: visible';
    cup.style = 'visibility: visible';

    //? SET THIS ONCE BANK VALUE IS UPDATING
    playerTurn(playerCheck)
}

//! ROLLING FUNCTIONS

function playerTurn(value, pos) {

    let turnPosition = 2;

    // if (turnPosition === 1) {
    //     p1Row.style = 'background-color: rgba(255,255,0,.75);';
    // } else if (turnPosition === 2) {
    //     p2Row.style = 'background-color: rgba(255,255,0,.75);';
    // } else if (turnPosition === 3) {
    //     p3Row.style = 'background-color: rgba(255,255,0,.75);';
    // } else {
    //     p4Row.style = 'background-color: rgba(255,255,0,.75);';
    // }

    if (turnPosition === 1) {
        p1Row.style = 'background-color: white; color: black;';
    } else if (turnPosition === 2) {
        p2Row.style = 'background-color: white; color: black;';
    } else if (turnPosition === 3) {
        p3Row.style = 'background-color: white; color: black;';
    } else {
        p4Row.style = 'background-color: white; color: black;';
    }

    let playerCount = value;
    console.log('Player Count: ', playerCount);

    return turnPos = turnPosition;

};

function cupRoll() {
    console.log(`It's player ${turnPos} turn / In cupRoll`)
    let roll = 1
    let cup = [];

    for (let i; roll <= 5; roll++) {
        let i = Math.floor((Math.random() * 6) + 1);
        cup.push(i);
        console.log(cup)
    }

    console.log(cup[0], cup[1], cup[2], cup[3], cup[4]);

    rollCheck(cup)
    displayRoll(cup[0], cup[1], cup[2], cup[3], cup[4]);

};

// let singleRoll =(d) => {
// ? This is for solo rolls
//     let d = Math.floor((Math.random() * 6) + 1);
//     console.log(d);
// }

function rollCheck(rollValue) {
    let rollCount = [];

    rollValue.map(x => x === 1 ? rollCount.push(100) : x === 5 ? rollCount.push(50) : rollCount.push(0));

    console.log('Roll Check: ', rollCount)
    let total = rollCount[0] +
        rollCount[1] +
        rollCount[2] +
        rollCount[3] +
        rollCount[4];
    console.log('Total: ', total);

    calcRolling(total);
}

let calcRolling = (total) => currentRoll.innerText = total;

//! Bank Value
function bankCount(bankingPlayer) {
    console.log(`In bankCount function: Player ${bankingPlayer}`);
    let currentValue = currentRoll.textContent;

    let scorePosition;
    let scoreID;
    let scoreRow;
    let scoreRowID;

    if (bankingPlayer === 1) {
        scorePosition = p1;
        scoreID = 'p1';
        scoreRow = p1Row;
        scoreRowID = 'p1Row'
    } else if(bankingPlayer === 2){
        scorePosition = p2;
        scoreID = 'p2';
        scoreRow = p2Row;
        scoreRowID = 'p2Row'
    } else if(bankingPlayer === 3){
        scorePosition = p2;
        scoreID = 'p2';
        scoreRow = p2Row;
        scoreRowID = 'p2Row'
    } else {        
        scorePosition = p2;
        scoreID = 'p2';
        scoreRow = p2Row;
        scoreRowID = 'p2Row'
    }

    p1 = document.getElementById('p1');
    p2 = document.getElementById('p2');
    p3 = document.getElementById('p3');
    p4 = document.getElementById('p4');
    p1Row = document.getElementById('p1Row');
    p2Row = document.getElementById('p2Row');
    p3Row = document.getElementById('p3Row');
    p4Row = document.getElementById('p4Row');

    console.log('Bank Btn: ', currentValue);
    console.log('scorePosition: ', scorePosition);
    console.log('scoreID: ', scoreID);
    console.log('scoreRow: ', scoreRow);
    console.log('scoreRowID: ', scoreRowID);

    let addAmounts = (value) => {
        let bankNumber = Number(scorePosition.textContent);
        let addTo = Number(value)
        console.log('BANKNUMBER', bankNumber);
        let total = bankNumber + addTo;
        // console.log('bankValue: ', typeof bankNumber)
        // console.log('Value: ', typeof addTo)
        return scorePosition.innerText = total;
    }
    addAmounts(currentValue);

    //? THIS SHOULD ALSO CHANGE PLAYERS AFTER BANKING A TOTAL

}

//! DISPLAY CUP
function displayRoll(d1, d2, d3, d4, d5) {
    console.log('Display: ', d1, d2, d3, d4, d5)

    let pipIMG = []

    setRollDisplay = (roll) => {
        let rollDisplay;

        roll === 1 ? rollDisplay = roll1 :
            roll === 2 ? rollDisplay = roll2 :
                roll === 3 ? rollDisplay = roll3 :
                    roll === 4 ? rollDisplay = roll4 :
                        roll === 5 ? rollDisplay = roll5 :
                            roll === 6 ? rollDisplay = roll6 :
                                rollDisplay = null;

        pipIMG.push(rollDisplay);
    }

    setRollDisplay(d1);
    setRollDisplay(d2);
    setRollDisplay(d3);
    setRollDisplay(d4);
    setRollDisplay(d5);

    d6One.className = `diceSize navbar-brand ${pipIMG[0]}`;
    d6Two.className = `diceSize navbar-brand ${pipIMG[1]}`;
    d6Three.className = `diceSize navbar-brand ${pipIMG[2]}`;
    d6Four.className = `diceSize navbar-brand ${pipIMG[3]}`;
    d6Five.className = `diceSize navbar-brand ${pipIMG[4]}`;

}