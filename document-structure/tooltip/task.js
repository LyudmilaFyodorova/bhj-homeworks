const hasTooltip = document.querySelectorAll('.has-tooltip');

document.body.insertAdjacentHTML('afterbegin', `<div class="tooltip"></div>`);
const tooltip = document.querySelector('.tooltip');


hasTooltip.forEach(item => item.addEventListener('click', event => {
    event.preventDefault();
    if (item.title === tooltip.textContent && tooltip.className.includes('tooltip_active')) {
        tooltip.classList.remove('tooltip_active');
        return;
    } else {
        tooltip.textContent = item.title;
        tooltip.classList.add('tooltip_active');
    }

    let position = item.getBoundingClientRect();
    let leftPosition = position.left;
    let topPosition = position.top + 20;

    tooltip.style.left = leftPosition + 'px';
    tooltip.style.top = topPosition + 'px';
}))
