const booksList = document.getElementById('books-list-section');
const addBooks = document.getElementById('add-book-section');
const contactUs = document.getElementById('contact-us');

const listLink = document.getElementById('list-link');
const addNewLink = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

addBooks.style.display = 'none';
contactUs.style.display = 'none';
booksList.classList.add('active');
booksList.classList.add('focus');

listLink.addEventListener('click', () => {
  window.location.reload();
  addBooks.style.display = 'none';
  contactUs.style.display = 'none';
  booksList.style.display = 'flex';
  booksList.classList.add('active');
  booksList.classList.add('focus');
});

addNewLink.addEventListener('click', () => {
  booksList.style.display = 'none';
  contactUs.style.display = 'none';
  addBooks.style.display = 'flex';
  addBooks.classList.add('active');
  addBooks.classList.add('focus');
});

contactLink.addEventListener('click', () => {
  booksList.style.display = 'none';
  contactUs.style.display = 'flex';
  addBooks.style.display = 'none';
  contactUs.classList.add('active');
  contactUs.classList.add('focus');
});