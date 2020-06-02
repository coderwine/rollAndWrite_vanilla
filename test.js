let rollNum = 1;
let cup = [];

// let threeOfaKind = 0;
// let fiveOfaKind = 0;
// let straight = 0;
// let fullHouse = 0;

let scoreSubTotal = [];
let scoreTotal;

for (let i; rollNum <= 5; rollNum++) {
    let i = Math.floor((Math.random() * 6) + 1);
    cup.push(i)
    // console.log(cup);
}

console.log('Cup: ', cup);

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

    let newCup = [one, two, three, four, five, six];

    let singles = [];
    let pair = [];
    let triplets;
    let quintuple;

    for (check of newCup) {

        if (check.length === 2) {
            // console.log(check[0]);
            pair.push(check[0]);
        } else if (check.length === 3) {
            triplets = check[0];
        } else if (check.lenth === 5) {
            quintuple = check[0];
        } else {
            console.log('check: ', check)
            singles.push(check);
        }
    }

    if(singles.length > 0) {

        for(let i = 0; i < singles.length; i++) {

            if(singles[i][0] === undefined) {
                null
            }else if(singles[i][0] === 1) {
                scoreSubTotal.push(100);
            } else if(singles[i][0] === 5) {
                scoreSubTotal.push(50);
            } else {
                scoreSubTotal.push(0);
            }
        }

        }
    
    function fullHouse(duo, trip) {
        let duoCheck = duo;

            if(duoCheck !== undefined) {

                if(duoCheck[0] > 0 && trip > 0) {
                    scoreSubTotal.push(500);
                } else {
                    duoCheck[0] === 1 ? scoreSubTotal.push(200) : duoCheck[0] === 5 ? scoreSubTotal.push(100) : scoreSubTotal.push(0);
                }

            } else if(trip > 0) {
                trip === 1 ? scoreSubTotal.push(1000) : scoreSubTotal.push(trip * 100);
            } else {
                scoreSubTotal.push(0);
            }


            
        }

        function fives(allFive) {
            console.log(allFive)
            allFive === 1 ? scoreSubTotal.push(10000) : scoreSubTotal.push(allFive * 1000);
        };
    
    fives(quintuple)
    fullHouse(pair, triplets);


}

checkScore(cup);

// console.log('pair: ', typeof pair);
// console.log('Three of a Kind: ', threeOfaKind)
// console.log('Five of a Kind: ', fiveOfaKind)
// console.log('Straight: ', straight)
// console.log('Full House: ', fullHouse);
console.log('scoreSubTotal: ', scoreSubTotal);


