const div = document.querySelector('#dice')
const img = document.querySelector('img')
dice.addEventListener('click', () => {
let rollResult = Math.floor((Math.random() * 6) + 1)
img.src= `./img/${rollResult}.png`
})

