let xhr = new XMLHttpRequest();
let url = new URL('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
const loader = document.querySelector('.loader');

xhr.open('GET', url);
xhr.send();

loader.classList.remove('loader_active');

