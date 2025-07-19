const checkboxButton = document.getElementById('checkbox');
const bodyElement = document.querySelector('body');
checkboxButton.onchange = function() {
bodyElement.classList.toggle('light-mode')
}
