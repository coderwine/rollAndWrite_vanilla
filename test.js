let rollNum = 1;
let cup = [];

let threeOfaKind = 0;
let fiveOfaKind = 0;
let straight = 0;
let fullHouse = 0;

for (let i; rollNum <= 5; rollNum++) {
    let i = Math.floor((Math.random() * 6) + 1);
    cup.push(i)
    // console.log(cup);
}

console.log(cup);

function checkScore(roll) {

    let one = [];
    let two = [];
    let three = [];
    let four = [];
    let five = [];
    let six = [];

    for (dice of roll) {

        switch (true) {
            case (dice === 1):
                one.push(dice);
                break;
            case (dice === 2):
                two.push(dice);
                break;
            case (dice === 3):
                three.push(dice);
                break;
            case (dice === 4):
                four.push(dice);
                break;
            case (dice === 5):
                five.push(dice);
                break;
            case (dice === 6):
                six.push(dice);
                break;
            default:
                console.log('no number to check')
        }

    }; // checking invidivual dice and store them into a set array.

    if (one.length === 3) {
        threes(one);
    }
    if (two.length === 3) {
        threes(two);
    }
    if (three.length === 3) {
        threes(three);
    }
    if (four.length === 3) {
        threes(four);
    }
    if (five.length === 3) {
        threes(five);
    }
    if (six.length === 3) {
        threes(six);
    }

    function threes(group) {
        group[0] === 1 ? threeOfaKind = group[0] * 1000 : threeOfaKind = group[0] * 100;
        // console.log('threes: ', threeOfaKind);
    }

    function fives(group) {
        group[0] === 1 ? fiveOfaKind = 10000 : fiveOfaKind = group[0] * 1000;
    }

    let newCup = [one, two, three, four, five, six];


    let singles = [];
    let pair = [];
    let triplets;
    let quintuple;

    for (check of newCup) {
        // console.log('forOf newCup: ',check, check.length);

        if (check.length === 2) {
            pair.push(check);
        } else if (check.length === 3) {
            triplets = check[0];
        } else if (check.lenth === 5) {
            quintuple = check[0];
        } else {
            singles.push(check);
        }
    }

    if(singles.length > 0) {
        console.log('if Singles: ', singles[0][0]);
        //need to cycle through singles array
    }

    if(triplets > 0) {
        console.log('triplets value: ', triplets);
        console.log('triplets typeof: ', typeof triplets);
        triplets === 1 ? console.log('triplet if: ', triplets * 1000) : console.log('triplet if: ', triplets * 100)
    }

    // console.log('singles: ', singles);
    // console.log('pair: ', pair);
    console.log('triplets: ', triplets);
    // console.log('quintuple: ', quintuple);

}

checkScore(cup);

// console.log('Three of a Kind: ', threeOfaKind)
// console.log('Five of a Kind: ', fiveOfaKind)
// console.log('Straight: ', straight)
// console.log('Full House: ', fullHouse)

