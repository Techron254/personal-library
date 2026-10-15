const addBookButton = document.getElementById('add-book');
const tbody = document.querySelector('#book-list');


let books = [
    { title: '1984', author: 'George Orwell', year: 1948, pages: 328, status: 'Read' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, pages: 281, status: 'Unread' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, pages: 426, status: 'Read' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, pages: 277, status: 'unread' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, pages: 310, status: 'Read' }
];
function displayBooks() {
    for (i = 0; i < books.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${books[i].title}</td>
            <td>${books[i].author}</td>
            <td>${books[i].year}</td>
            <td>${books[i].pages}</td>
            <td><button id = "status-button">${books[i].status}</button></td>
            `;
        tbody.appendChild(row);
    }
    const statusButtons = document.querySelectorAll('#status-button');
    statusButtons.forEach((button, index) => {
    if (button.textContent === 'Read') {
        button.id = 'read';
        }
        else {
            button.id = 'unread';
        }
    button.addEventListener('click', () => {
        if (button.textContent === 'Read') {
            button.textContent = 'Unread';
            button.id = 'unread';
            books[index].status = 'Unread';
        } else {
            button.textContent = 'Read';
            button.id = 'read';
            books[index].status = 'Read';
        }
})
})
}
displayBooks();

addBookButton.addEventListener('click', () => {
    const dialog = document.getElementById('add-book-dialog');
    dialog.showModal();
});
const submitBookButton = document.getElementById('submit-book');
submitBookButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const yearInput = document.getElementById('year');
    const pagesInput = document.getElementById('pages');
    const statusInput = document.querySelector('input[name="status"]:checked');
    
    const newBook = {
        title: titleInput.value,
        author: authorInput.value,
        year: parseInt(yearInput.value),
        pages: parseInt(pagesInput.value),
        status: statusInput.value
    };
    
    function validateYear(year) {
        const currentYear = new Date().getFullYear();
        return year > 0 && year <= currentYear;
    }
    function validatePages(pages) {
        return pages > 0;
    }
    function validateInputs(book) {
        return validateYear(book.year) && validatePages(book.pages);
    }
    function showError(message) {
        alert("fill in the fields correctly!");
    }
    if (!validateInputs(newBook)) {
        showError("Please enter valid inputs for year and pages.");
        return;
    }
    
    books.push(newBook);
    tbody.innerHTML = '';
    displayBooks();
    dialog.close();
});

    const dialog = document.getElementById('add-book-dialog');
    dialog.close();
    const dialogCloseButton = document.getElementById('close-dialog');
    dialogCloseButton.addEventListener('click', () => {
        dialog.close();
    }
    );