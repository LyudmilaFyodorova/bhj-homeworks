const progress = document.getElementById('progress');
const selectFile = document.getElementById('form');


selectFile.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(selectFile);
    let xhr = new XMLHttpRequest();
    let url = new URL('https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function (event) {
        progress.value = event.loaded / event.total;
    }

    xhr.open('POST', url);
    xhr.send(formData);
})
