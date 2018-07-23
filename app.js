document.addEventListener('DOMContentLoaded', function(){
  const list = document.querySelector('#book-list');

  // filter books
  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });

  // hide books
  const hideBooks = document.querySelector('#hide');
  hideBooks.addEventListener('change', function(e) {
    if(hideBooks.checked) {
      list.style.display = 'none';
    } else {
      list.style.display = 'initial';
    }
  });

  const addForm = document.forms['add-book'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault(); // To avoid default reload once book is added
    const value = addForm.querySelector('input[type="text"]').value;

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // add class
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append elements
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

  });
});
