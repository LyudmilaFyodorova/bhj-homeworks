let xhr = new XMLHttpRequest();
let url = new URL('https://students.netoservices.ru/nestjs-backend/upload')
const progress = document.getElementById('progress');

xhr.open('POST', url);
xhr.send();

xhr.upload.onprogress = function (event) {
    progress.value = event.loaded;
}