const allHoles = document.querySelectorAll('.hole');
const deadStatus = document.getElementById('dead');
const lostStatus = document.getElementById('lost');
let deadStart = 0;
let lostStart = 0;

allHoles.forEach(item => item.onclick = function () {
    if (item.className.includes('hole_has-mole')) {
        deadStart++
    } else {
        lostStart++
    }

    deadStatus.textContent = deadStart;
    lostStatus.textContent = lostStart;

    if (deadStart === 10) {
        alert('Вы победили!')
        deadStart = 0;
        lostStart = 0;
    }
    if (lostStart === 5) {
        alert('Вы проиграли!')
        deadStart = 0;
        lostStart = 0;
    }
}
)