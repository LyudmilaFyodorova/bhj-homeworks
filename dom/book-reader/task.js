const fontSizeItems = document.querySelectorAll('.font-size');
const books = document.querySelectorAll('.book__content');


fontSizeItems.forEach(item => item.addEventListener('click', (event) => {
    event.preventDefault();
    fontSizeItems.forEach(item => item.classList.remove('font-size_active'));
    item.classList.add('font-size_active');


    books.forEach(book => {
        book.classList.remove('book_fs-big', 'book_fs-small');
        const size = event.target.dataset.size;
        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    })
}))