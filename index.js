import Books from './modules/Books.js';
import { DateTime } from './modules/luxon.js';

const books = new Books();
const addBookBtn = document.getElementById('add-book-btn');

addBookBtn.addEventListener('click', () => {
  books.addBook();
});

const todayDate = document.getElementById('date');
todayDate.innerHTML = (`${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`);

