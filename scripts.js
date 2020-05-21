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
totalRoll = document.getElementById('totalRoll');

cup.addEventListener('click', cupRoll);
// d6One.addEventListener('click', diceOne);
// d6Two.addEventListener('click', diceTwo);
// d6Three.addEventListener('click', diceThree);
// d6Four.addEventListener('click', diceFour);
// d6Five.addEventListener('click', diceFive);

//! Empty Variables
let dOne;
let dTwo;
let dThree;
let dFour;
let dFive; 

// ROLLING FUNCTIONS

function cupRoll() {
    let roll = 1
    let cup = [];

    for(let i; roll <= 5; roll++) {
        let i = Math.floor((Math.random() * 6) + 1);
        cup.push(i);
        console.log(cup)
    }

    console.log(cup[0], cup[1], cup[2], cup[3], cup[4]);

    calcRolling(cup[0], cup[1], cup[2], cup[3], cup[4]);
    rollCheck(cup)
    displayRoll(cup[0], cup[1], cup[2], cup[3], cup[4]);

    // displayRoll(roll6)
};

// let singleRoll =(d) => {
//     ? This is for solo rolls
//     let roll6 = Math.floor((Math.random() * 6) + 1);
//     console.log(roll6);
// }

let rollCheck =(rollValue) => {
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

let calcRolling = (total) => totalRoll.innerText = total;

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
        
    // displayRollOne = document.getElementById('rollResults');
    // displayRollOne.appendChild(rollOne);
    // displayRollOne.appendChild(rollTwo);
    // displayRollOne.appendChild(rollThree);
    // displayRollOne.appendChild(rollFour);
    // displayRollOne.appendChild(rollFive);

    // rollOne.innerText = d1
    // rollTwo.innerText = d2
    // rollThree.innerText = d3
    // rollFour.innerText = d4
    // rollFive.innerText = d5

    // console.log(displayRollOne)
    // console.log(displayRollOne.children.results)

    // totalRoll.innerText = roll;
    
}

//? NEED TO MAKE IT WHERE THE RESULTS REPLACE CURRENT ROLL


// clearRoll = () => {
//     let results = document.getElementById('rollResults');

//     while(results.firstChild) {
//         results.removeChild(firstChild);
//     }
// }