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
let playerCount;
let playerCheck;

//! PLAYER SETUP

function playerStats() {
    event.preventDefault();

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
        // console.log('playerStats - playerBuild: ', playerBuild);
    } else if (playerCheck === 2) {
        createElements('Player One', 'p1', 'p1Row', 1);
        createElements('Player Two', 'p2', 'p2Row', 2);
        // console.log('playerStats - playerBuild: ', playerBuild);
    } else if (playerCheck === 3) {
        createElements('Player One', 'p1', 'p1Row', 1);
        createElements('Player Two', 'p2', 'p2Row', 2);
        createElements('Player Three', 'p3', 'p3Row', 3);
        // console.log('playerStats - playerBuild: ', playerBuild);
    } else if (playerCheck === 4) {
        createElements('Player One', 'p1', 'p1Row', 1);
        createElements('Player Two', 'p2', 'p2Row', 2);
        createElements('Player Three', 'p3', 'p3Row', 3);
        createElements('Player Four', 'p4', 'p4Row', 4);
        // console.log('playerStats - playerBuild: ', playerBuild);
    } else {
        null
    }

    playerForm.style = 'display: none';
    playerTable.style = 'visibility: visible';
    cup.style = 'visibility: visible';

    //? SET THIS ONCE BANK VALUE IS UPDATING
    turnPos = 1;
    playerCounter(playerCheck, 0)
}

//! ROLLING FUNCTIONS

function playerCounter(num, bankPos) {
    playerCount = num;
    addTurn = turnPos + bankPos;
    playerTurn(addTurn);
}

function playerTurn(pos) {

    let turnPosition = pos;
    
    if (turnPosition === 1) {
        p1Row.style = 'background-color: white; color: black;';
        p2Row.style = null;
        playerCheck === 3 || playerCheck === 4 ? p3Row.style = null : null;
        playerCheck === 4 ? p4Row.style = null : null;
    } else if (turnPosition === 2) {
        p1Row.style = null;
        p2Row.style = 'background-color: white; color: black;';
        playerCheck === 3 || playerCheck === 4 ? p3Row.style = null : null;
        playerCheck === 4 ? p4Row.style = null : null;
    } else if (turnPosition === 3) {
        p1Row.style = null;
        p2Row.style = null;
        p3Row.style = 'background-color: white; color: black;';
        playerCheck === 4 ? p4Row.style = null : null;
    } else {
        p1Row.style = null;
        p2Row.style = null;
        p3Row.style = null;
        p4Row.style = 'background-color: white; color: black;';
    }

    return turnPos = turnPosition;
 
};

//! DICE ROLL
function cupRoll() {
    let roll = 1
    let cup = [];

    for (let i; roll <= 5; roll++) {
        let i = Math.floor((Math.random() * 6) + 1);
        cup.push(i);
        console.log(cup)
    }

    // console.log(cup[0], cup[1], cup[2], cup[3], cup[4]);

    rollCheck(cup)
    displayRoll(cup[0], cup[1], cup[2], cup[3], cup[4]);

};

// let singleRoll =(d) => {
// ? This is for solo rolls
//     let d = Math.floor((Math.random() * 6) + 1);
//     console.log(d);
// }

//! FIGURING SCORE
function rollCheck(rollValue) {
    let rollCount = [];

    //? CONSIDER SWITCH STATEMENT TO CHECK AGAINST THE ROLL
    rollValue.map(x => x === 1 ? rollCount.push(100) : x === 5 ? rollCount.push(50) : rollCount.push(0));


    // console.log('Roll Check: ', rollCount)
    let total = rollCount[0] +
        rollCount[1] +
        rollCount[2] +
        rollCount[3] +
        rollCount[4];
    // console.log('Total: ', total);

    calcRolling(total);
}

let calcRolling = (total) => currentRoll.innerText = total;

//! Bank Value
function bankCount(bankingPlayer) {
    // console.log(`bankCount - Player ${bankingPlayer} just banked a value.`);
    let currentValue = currentRoll.textContent;

    let resetValue = 0;
    let scorePosition;
    let scoreID;
    let scoreRow;
    let scoreRowID;

    if (bankingPlayer === 1) {
        scorePosition = p1;
        scoreID = 'p1';
        scoreRow = p1Row;
        scoreRowID = 'p1Row'
    } else if (bankingPlayer === 2) {
        scorePosition = p2;
        scoreID = 'p2';
        scoreRow = p2Row;
        scoreRowID = 'p2Row'
    } else if (bankingPlayer === 3) {
        scorePosition = p3;
        scoreID = 'p3';
        scoreRow = p3Row;
        scoreRowID = 'p3Row'
    } else {
        scorePosition = p4;
        scoreID = 'p4';
        scoreRow = p4Row;
        scoreRowID = 'p4Row'
    }

    if(playerCheck === 1 || playerCheck === 2 ){
        p1 = document.getElementById('p1');
        p1Row = document.getElementById('p1Row');
        p2 = document.getElementById('p2');
        p2Row = document.getElementById('p2Row');
    } else if (playerCheck === 3){
        p1 = document.getElementById('p1');
        p1Row = document.getElementById('p1Row');
        p2 = document.getElementById('p2');
        p2Row = document.getElementById('p2Row');
        p3 = document.getElementById('p3');
        p3Row = document.getElementById('p3Row');
    } else if(playerCheck === 4) {
        p1 = document.getElementById('p1');
        p1Row = document.getElementById('p1Row');
        p2 = document.getElementById('p2');
        p2Row = document.getElementById('p2Row');
        p3 = document.getElementById('p3');
        p3Row = document.getElementById('p3Row');
        p4 = document.getElementById('p4');
        p4Row = document.getElementById('p4Row');
    }

    let addAmounts = (value) => {
        let bankNumber = Number(scorePosition.textContent);
        let addTo = Number(value)
        let total = bankNumber + addTo;
        currentRoll.innerHTML = Number(resetValue);

        return scorePosition.innerText = total;
    }
    addAmounts(currentValue);

    //* BANKING TOTALS PER PLAYER
    // console.log('bankCount bankingPlayer: ', bankingPlayer)
    let nextTurn;

    if (playerCount === 1 || playerCount === 2) {
        bankingPlayer === 1 ?
            nextTurn = 1 : nextTurn = -1
    } else if (playerCount === 3) {
        bankingPlayer === 1 || bankingPlayer === 2 ?
            nextTurn = 1 : nextTurn = -2
    } else (
        bankingPlayer === 1 || bankingPlayer === 2 || bankingPlayer === 3 ?
            nextTurn = 1 : nextTurn = -3
    );

    // console.log('bankCount nextTurn: ', nextTurn)

    playerCounter(playerCount, nextTurn);

    //! HIGH SCORE CHECK 
    function checkScore() {
        let one = Number(p1.textContent);
        let two = Number(p2.textContent);
        let three = Number(p3.textContent);
        let four = Number(p4.textContent);
        
        //? FIRST PLACE
                if (one >= two && one >= three && one >= four) {
            p1.style = "color: lightgreen; background-color: darkgreen";  
                
            one === two ? 
                p2.style = "color: lightgreen; background-color: darkgreen" : 
            p2.style = null;
            
            playerCheck === 3 || playerCheck === 4 ? 
                one === three ? 
                    p3.style = "color: lightgreen; background-color: darkgreen" : 
                p3.style = null : 
            null
            
            playerCheck === 4 ? 
                one === four ? 
                    p4.style = "color: lightgreen; background-color: darkgreen" : 
                p4.style = null : 
            null;
        }  
        if (two >= one && two >= three && two >= four) {
            two === one ? 
                p1.style = "color: lightgreen; background-color: darkgreen" : 
            p1.style = null;

            p2.style = "color: lightgreen; background-color: darkgreen";

            playerCheck === 3 || playerCheck === 4 ? 
                two === three ? 
                    p3.style = "color: lightgreen; background-color: darkgreen" : 
                p3.style = null : 
            null

            playerCheck === 4 ? 
                two === four ? 
                    p4.style = "color: lightgreen; background-color: darkgreen" : 
                p4.style = null : 
            null;
        } 
        if (three >= one && three >= two && three >= four) {
            three === one ? 
                p1.style = "color: lightgreen; background-color: darkgreen" : 
            p1.style = null;

            three === two ? 
                p2.style = "color: lightgreen; background-color: darkgreen" : 
            p2.style = null;

            p3.style = "color: lightgreen; background-color: darkgreen"

            playerCheck === 4 ? 
                three === 4 ? 
                    p4.style = "color: lightgreen; background-color: darkgreen" : 
                p4.style = null : 
            null;
        }

        if (four >= one && four >= two && four >= three){
            four === one ? 
                p1.style = "color: lightgreen; background-color: darkgreen" :
            p1.style = null;

            four === two ? 
                p2.style = "color: lightgreen; background-color: darkgreen" : 
            p2.style = null;

            four === three ? 
                p3.style = "color: lightgreen; background-color: darkgreen" : 
            p3.style = null;

            p4.style = "color: lightgreen; background-color: darkgreen";
        } 

    }

    checkScore();
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