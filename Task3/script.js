// Book array to store the library books
let books = [];

// Add event listener to the form to add a new book
document.getElementById('book-form').addEventListener('submit', addBook);

// Function to add a book to the list
function addBook(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
    
    // Create a book object
    const book = {
        title,
        author,
        category,
        borrowed: false
    };

    // Add the book to the array
    books.push(book);

    // Clear the form fields
    document.getElementById('book-form').reset();

    // Display the updated book list
    displayBooks();
}

// Function to display the books in the table
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>
                <input type="checkbox" ${book.borrowed ? 'checked' : ''} onclick="toggleBorrowed(${index})">
            </td>
        `;
        bookList.appendChild(row);
    });
}

// Function to toggle the borrowed status
function toggleBorrowed(index) {
    books[index].borrowed = !books[index].borrowed;
    displayBooks();
}

// Function to search for books
function searchBooks() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm)
    );

    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    filteredBooks.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>
                <input type="checkbox" ${book.borrowed ? 'checked' : ''} onclick="toggleBorrowed(${index})">
            </td>
        `;
        bookList.appendChild(row);
    });
}