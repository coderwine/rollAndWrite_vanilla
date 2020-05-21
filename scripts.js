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

bankValue = document.getElementById('bankedRolls');
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
bankBtn.addEventListener('click', bankCount);
playerCountBtn.addEventListener('click', playerStats);

//! Empty Variables
let dOne;
let dTwo;
let dThree;
let dFour;
let dFive; 

//! PLAYER SETUP
// function setPlayers(x) {
//     let playerCount;
// }

function playerStats() {
    event.preventDefault();
    console.log('Player Form: ', playerForm[2].checked)
    let playerCheck;

    playerForm[0].checked === true ? playerCheck = 1 :
    playerForm[1].checked === true ? playerCheck = 2 :
    playerForm[2].checked === true ? playerCheck = 3 :
    playerForm[3].checked === true ? playerCheck = 4 :
    null;

    console.log('Player Check Value: ', playerCheck)

    //? WORKING ON GENERATING A PLAYER TABLE
    // let createElements = () => {
    //     return 
    //         let row = createElement('tr');
    //         let head = createElement('th');
    //         let data = createElement('td');
    // }

    // if(playerCheck === 1) {
    //     createElements();
    //     head.innerText = 'Player One'
    //     data.id = 'playerOne'
    //     data.innerText = 'test';
        
    //     tableBody.appendChild(row);
    //     tableBody.tr.appendChild(head);
    //     tableBody.tr.appendChild(data);
    // } else {
    //     null
    // }

    // playerForm.style = 'visibility: hidden';
    // playerForm.style = 'display: none';
    playerTable.style = 'visibility: visible'
}

//! ROLLING FUNCTIONS

function cupRoll() {
    let roll = 1
    let cup = [];

    for(let i; roll <= 5; roll++) {
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

    let check = rollValue.map( x => x === 1 ? rollCount.push(100) : x === 5 ? rollCount.push(50) : rollCount.push(0));


    console.log(rollCount)
    let total = rollCount[0] + 
                rollCount[1] + 
                rollCount[2] + 
                rollCount[3] + 
                rollCount[4];
    console.log(total);

    calcRolling(total);
}

let calcRolling = (total) => currentRoll.innerText = total;

function bankCount() {
    let currentValue = currentRoll.textContent
    console.log('Bank Btn: ', currentValue)

    let addAmounts = (value) => {
        let bankNumber = Number(bankValue.textContent);
        let addTo = Number(value)

        let total = bankNumber + addTo;
        console.log('bankValue: ', typeof bankNumber)
        console.log('Value: ', typeof addTo)
        return bankValue.innerText = total;
    }
    addAmounts(currentValue);

    //? THIS SHOULD ALSO CHANGE PLAYERS AFTER BANKING A TOTAL

}

//! DISPLAY
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