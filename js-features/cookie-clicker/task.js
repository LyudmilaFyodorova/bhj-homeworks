const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
let clickStart = 0;


function changeSizeAndCount() {
    if (image.width === 200) {
        image.width = 100;
    } else {
        image.width = 200;
    }

clickStart++;
clicker.textContent = clickStart;
}

image.onclick = changeSizeAndCount;
