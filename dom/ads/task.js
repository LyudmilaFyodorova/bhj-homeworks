const rotatorCases = document.querySelectorAll('.rotator__case');

const tiverId = setInterval(() => rotatorCases.forEach(item => item.addEventListener('click', (event) => {
    item.classList.toggle('rotator__case_active');
})), 1000);
