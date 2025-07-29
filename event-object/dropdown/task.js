const dropdownMenu = document.querySelectorAll('.dropdown');

dropdownMenu.forEach(dropdown => {
    const dropdownValue = dropdownMenu.querySelector('.dropdown__value');
    const dropdownList = dropdownMenu.querySelector('.dropdown__list');
    const dropdownLinks = dropdownMenu.querySelectorAll('.dropdown__link');

    dropdownValue.addEventListener('click', function () {
        dropdownList.classList.toggle("dropdown__list_active");
    })

    dropdownLinks.forEach(item => item.addEventListener('click', (event) => {
        dropdownValue.textContent = event.currentTarget.textContent;
        dropdownList.classList.remove("dropdown__list_active");
        event.preventDefault();

    }))
})