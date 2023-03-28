import BookClass from './bookClass.js';

export default class Books {
  constructor() {
    this.booksList = document.getElementById('books-list');
    this.bookTitle = document.getElementById('title');
    this.bookAuthor = document.getElementById('author');
    this.allBooks = document.getElementById('all-books');
    this.booksArray = [];
    if (localStorage.getItem('BookStorage')) {
      this.booksArray = JSON.parse(localStorage.getItem('BookStorage'));
      this.booksDisplay();
    }
  }

  addBook = () => {
    const title = this.bookTitle.value;
    const author = this.bookAuthor.value;
    const book = new BookClass(title, author);
    this.booksArray.push(book);
    this.booksDisplay();
    this.saveToLocalStorage();
    this.bookAuthor.value = '';
    this.bookTitle.value = '';
  };

  saveToLocalStorage = () => {
    localStorage.setItem('BookStorage', JSON.stringify(this.booksArray));
  };

  booksDisplay = () => {
    this.booksArray.forEach((book, index) => {
      this.booksHtml = (title, author) => `  <div class="book-container">  
      <h3 id="book-author" class = "book-author">"${title}" by ${author}</h3>
      <button type="button" class="book-btn" id="book-btn">Remove</button>
      </div>`;
      const htmlToAdd = this.booksHtml(book.title, book.author);
      this.booksList.insertAdjacentHTML('afterbegin', htmlToAdd);
      this.removeBtn = document.getElementById('book-btn');
      this.removeBtn.onclick = () => this.removeBook(index);
    });
  }

  removeBook = (index) => {
    this.booksArray.splice(index, 1);
    this.booksList.innerHTML = '';
    this.booksDisplay();
    this.saveToLocalStorage();
  };
}