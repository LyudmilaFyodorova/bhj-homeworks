const tooltip = document.querySelectorAll('.tooltip');
const hasTooltip = document.querySelectorAll('.has-tooltip');

tooltip.forEach(element => {
    const { top, bottom } = element.getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight) {
        element.classList.add('tooltip_active');
    } else {
        element.classList.remove('tooltip_active');
    }

    tooltip.innerText = hasTooltip.title;
})

hasTooltip.addEventListener('click', () => {
    
})
