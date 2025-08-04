const rotatorCases = document.querySelectorAll('.rotator__case');

let rotatorCaseActive = document.querySelector('.rotator__case_active');

setInterval(() => {
    rotatorCaseActive.classList.remove('rotator__case_active');
    if (rotatorCaseActive.nextElementSibling) {
        rotatorCaseActive = rotatorCaseActive.nextElementSibling;
        rotatorCaseActive.classList.add('rotator__case_active')

    } else {
        rotatorCaseActive = document.querySelector('.rotator').firstElementChild;
        rotatorCaseActive.classList.add('rotator__case_active')
    }
}, 1000);