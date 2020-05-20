//! Rolled Displayed Class Sets
roll1 = 'rolledD1';
roll2 = 'rolledD2';
roll3 = 'rolledD3';
roll4 = 'rolledD4';
roll5 = 'rolledD5';
roll6 = 'rolledD6';


// random = document.getElementById('rollRandom');
// fire = document.getElementById('rollFire');
six = document.getElementById('d6One');

// random.addEventListener('click', rollingRandom);
// fire.addEventListener('click', rollingFire);
six.addEventListener('click', rolling6);

// ROLLING FUNCTIONS

function rolling6() {

    let roll6 = Math.floor((Math.random() * 6) + 1);
    console.log(roll6);

    displayRoll(roll6)
};


//! DISPLAY
function displayRoll(roll) {
    console.log('Display: ', roll)
    let rollDisplay;

    roll === 1 ? rollDisplay = roll1 : 
    roll === 2 ? rollDisplay = roll2 : 
    roll === 3 ? rollDisplay = roll3 : 
    roll === 4 ? rollDisplay = roll4 : 
    roll === 5 ? rollDisplay = roll5 : 
    roll === 6 ? rollDisplay = roll6 : 
    rollDisplay = null;
    
    rollResult = document.createElement('div');
    rollResult.className = `col-md rolled btn ${rollDisplay}` ;
    rollResult.id = 'results';
    
    displayRollOne = document.getElementById('rollResults');
    displayRollOne.appendChild(rollResult);

    console.log(displayRollOne)
    console.log(displayRollOne.children.results)

    while(rollResult != null) {
        console.log('while: ', rollResult)
        displayRollOne.removeChild(displayRollOne.children.results);
    }

    displayRollOne.appendChild(rollResult);

    // rollResult.innerText = roll;
    
}

//? NEED TO MAKE IT WHERE THE RESULTS REPLACE CURRENT ROLL



// function rolling(roll) {
//     let rolling = document.getElementById('rollResults');

//     let loadDiv = document.createElement(div);
//     let loadSpan = document.createElement(span);

//     loadDiv.className = 'spinner-border text-primary'
//     loadDiv.role = 'status'

//     loadSpan.className = 'sr-only'
//     loadDiv.innerText = 'Loading...'

//     loadDiv.appendChild(loadDiv);
//     rolling.appendChild(loadDiv);

//     displayRoll(roll)

// }

clearRoll = () => {
    let results = document.getElementById('rollResults');
    // console.log(results.firstChild)
    // results.firstChild > 0 ? results.removeChild() : null;

    while(results.firstChild) {
        results.removeChild(firstChild);
    }
}