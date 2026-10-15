const addBookButton = document.getElementById('add-book');
const tbody = document.querySelector('#book-list');

class Book{
   constructor(title, author, year, pages, status){
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.status = status;
   }
}

const book1 = new Book ("1984", "George Orwell", 1948, 328, "Read");
const book2 = new Book ("To Kill a Mockingbird", "Harper Lee", 1960, 281, "Unread");
const book3 = new Book ("Pride and Prejudice", "Jane Austen", 1813, 426, "Read");
const book4 = new Book ("The Catcher in the Rye", "J.D. Salinger", 1951, 277, "Unread");
const book5 = new Book ("The Hobbit", "J.R.R. Tolkien", 1937, 310, "Read");

const books = [book1,book2,book3,book4,book5];


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