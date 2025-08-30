let xhr = new XMLHttpRequest();
let url = new URL('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
const loader = document.querySelector('.loader');
const items = document.getElementById('items');

xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active');

        const response = JSON.parse(xhr.responseText);

        items.insertAdjacentHTML('afterbegin',
            `<div class="item__code">
                ${response.valute.CharCode}
            </div>
            <div class="item__value">
                ${response.valute.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>`);
    }
}
