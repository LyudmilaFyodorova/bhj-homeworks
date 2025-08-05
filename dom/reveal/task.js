window.addEventListener('scroll', function () {
    const reveal = document.querySelectorAll('.reveal');

    reveal.forEach(element => {
        const { top, bottom } = element.getBoundingClientRect();
        if (bottom > 0 && top < window.innerHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    })
})
