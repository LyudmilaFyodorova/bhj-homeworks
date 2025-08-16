const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelectorAll('.tooltip');

tasksList.insertAdjacentHTML('afterbegin',
`<div class="tooltip">Текст подсказки</div>`);

/**let div = document.createElement('div');
div.className = "tooltip";
div.textContent = hasTooltip.title;
document.body.append(div);**/


hasTooltip.forEach(item => item.addEventListener('click', () => {
    if () {
        item.classList.toggle('tooltip_active');
        return;
    } else {
        tooltip.innerText = hasTooltip.title;
        item.classList.add('tooltip_active');
    }
}))

