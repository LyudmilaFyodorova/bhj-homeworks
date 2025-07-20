const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.onclick = function () {
    dropdownList.classList.add("dropdown__list_active");
}

if (dropdownItems.classList.contains('dropdown__list_active')) {
    dropdownList.classList.remove("dropdown__list_active");
}