//! DICE ROLL
function cupRoll() {
    let roll = 1
    let cup = [];

    for (let i; roll <= 5; roll++) {
        let i = Math.floor((Math.random() * 6) + 1);
        cup.push(i);
        // console.log(cup)
    }

    rollCheck(cup)

};

//! FIGURING SCORE
function rollCheck(rollValue) {  //? Coming from cupRoll
    let rollCount = [];
    let heldDice;

    let heldD1 = rollValue[0];
    let heldD2 = rollValue[1];
    let heldD3 = rollValue[2];
    let heldD4 = rollValue[3];
    let heldD5 = rollValue[4];

    //? CONSIDER SWITCH STATEMENT TO CHECK AGAINST THE ROLL
    // rollValue.map(x => x === 1 ? rollCount.push(100) : x === 5 ? rollCount.push(50) : rollCount.push(0));
    
    console.log(heldD1);
    console.log(heldD2);
    console.log(heldD3);
    console.log(heldD4);
    console.log(heldD5);

    // console.log(rollCount)
    
    // let total = rollCount[0] +
    //     rollCount[1] +
    //     rollCount[2] +
    //     rollCount[3] +
    //     rollCount[4];

    // console.log(total);

    // calcRolling(total);  //? Calls upon DOM manipulation 
}

// let calcRolling = (total) => currentRoll.innerText = total; //? DOM manipulation

cupRoll(); //! This is acting as the UI button within the HTML