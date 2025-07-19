const allHoles = document.querySelectorAll('.hole');
const arr = Array.from(allHoles);
const deadStatus = document.getElementById('dead');
const lostStatus = document.getElementById('lost');
let deadStart = 0;
let lostStart = 0;

arr.forEach(item =>
    arr[i].onclick = function () {
        for (let i = 0; i < arr.length; i++) {
            if (hole.className.includes('hole_has-mole')) {
                deadStart++
            } else {
                lostStart++
            }
            
            deadStatus.textContent = deadStart;
            lostStatus.textContent = lostStart;

            if (deadStatus === 10) {
                alert('Вы победили!')
            }
            if (lostStatus === 5) {
                alert('Вы проиграли!')
            }
        }
    }
)