const fontSizeItems = document.querySelectorAll('.font-size');
const books = document.querySelectorAll('.book');

fontSizeItems.forEach(item => item.classList.remove('font-size_active'));

fontSizeItems.forEach(item => item.addEventListener('click', (event) => {
    event.preventDefault();
    item.classList.add('font-size_active');
}))

books.forEach(item => item.classList.remove('book_fs-big', 'book_fs-small'));

books.forEach(item => function () {
    if (fontSizeItems.classList.includes('font-size_small')) {
        item.classList.add('book_fs-small');
    }

    if (fontSizeItems.classList.includes('font-size_big')) {
        item.classList.add('book_fs-big');
    }
})