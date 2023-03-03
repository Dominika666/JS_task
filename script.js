const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const square = document.querySelector('.square')

const czesc = () => {
    console.log('Cześć')
}

const colorRed = () => {
    square.style.backgroundColor = "red"
}

const colorBlue = () => {
    square.style.backgroundColor = "blue"
}

const toggle = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}

btn1.addEventListener('dblclick', czesc)
square.addEventListener('mouseover', colorRed)
square.addEventListener('mouseout', colorBlue)
btn2.addEventListener('click', toggle)

