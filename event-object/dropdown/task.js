const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

dropdownValue.onclick = function () {
    dropdownList.classList.toggle("dropdown__list_active");
}

dropdownItems.forEach(item => item.onclick = function () {
    dropdownValue.textContent = 
})

dropdownLinks.addEventListener('click', (event) => {
    event.preventDefault()
})
