const twenty = document.getElementById('roll20');
const twelve = document.getElementById('roll12');
const ten = document.getElementById('roll10');
const eight = document.getElementById('roll8');
const six = document.getElementById('roll6');
const four = document.getElementById('roll4');
const random = document.getElementById('rollRandom');
const fire = document.getElementById('rollFire');

twenty.addEventListener('click', rolling20);
twelve.addEventListener('click', rolling12);
ten.addEventListener('click', rolling10);
eight.addEventListener('click', rolling8);
six.addEventListener('click', rolling6);
four.addEventListener('click', rolling4);
random.addEventListener('click', rollingRandom);
fire.addEventListener('click', rollingFire);

// ROLLING FUNCTIONS
function rolling20() {
    let roll20 = Math.floor((Math.random() * 20) + 1);
    console.log(roll20);
    displayRoll(roll20)
};

function rolling12() {
    let roll12 = Math.floor((Math.random() * 12) + 1);
    console.log(roll12);
    // displayRoll(roll12)
};
function rolling10() {
    let roll10 = Math.floor((Math.random() * 10) + 1);
    console.log(roll10);
    // displayRoll(roll10)
};
function rolling8() {
    let roll8 = Math.floor((Math.random() * 8) + 1);
    console.log(roll8);
    // displayRoll(roll8)
};
function rolling6() {
    let roll6 = Math.floor((Math.random() * 6) + 1);
    console.log(roll6);
    // displayRoll(roll6)
};
function rolling4() {
    let roll4 = Math.floor((Math.random() * 4) + 1);
    console.log(roll4);
    // displayRoll(roll4)
};

// DISPLAY
function displayRoll(roll) {
    let rollResult = document.getElementById('roll20Results');
    
}
