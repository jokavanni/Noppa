const dice = document.querySelector('#dice')
dice.addEventListener('click', () => {
let rollResult = Math.floor((Math.random() * 6) + 1);
if (rollResult == 1) document.write('<img src="./img/1.png">');
else if (rollResult == 2) document.write('<img src="./img/2.png">');
else if (rollResult == 3) document.write('<img src="./img/3.png">');
else if (rollResult == 4) document.write('<img src="./img/4.png">');
else if (rollResult == 5) document.write('<img src="./img/5.png">');
else  document.write('<img src="./img/6.png">');
})