let rollNum = 1;
let cup = [];

for(let i; rollNum <= 5; rollNum++) {
    let i = Math.floor((Math.random() * 6) + 1);
    cup.push(i)
    console.log(cup);
}

// for(dice in cup) {
//     console.log('for in loop ',cup[dice])
// }

for(dice of cup) {
    console.log('for of loop ',dice);
}

function checkScore(roll) {
    let threeOfaKind;
    let fiveOfaKind;
    let straight;
    let fullHouse;

    
}