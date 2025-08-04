const dropdownMenus = document.querySelectorAll('.dropdown');

dropdownMenus.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');

    dropdownValue.addEventListener('click', function () {
        dropdownList.classList.toggle("dropdown__list_active");
    })

    dropdownLinks.forEach(item => item.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = event.currentTarget.textContent;
        dropdownList.classList.remove("dropdown__list_active");

    }))
})