const modal = document.getElementById('subscribe-modal');
modal.classList.add('modal_active');

const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'windowClosed=closed';
})

const getCookie = (windowClosed) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + windowClosed + "=");
    if (parts.length === 2) {
        modal.classList.add('modal_active');
    }
}
