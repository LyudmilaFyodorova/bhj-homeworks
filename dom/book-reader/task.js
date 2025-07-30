const fontSizeItems = document.querySelectorAll('.font-size');
const books = document.querySelectorAll('.book');

fontSizeItems.forEach(item => item.addEventListener('click', (event) => {
    item.classList.toggle('font-size_active');
}))

books.forEach(item => function () {
    if () {
        item.classList.add('book_fs-small');
    }

    if () {
        item.classList.add('book_fs-big');
    }
})