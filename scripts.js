const twenty = document.getElementById('roll20')

twenty.addEventListener('click', rolling20);

function rolling20() {
    let result = Math.floor((Math.random() * 20) + 1);

    


    console.log(result);
};