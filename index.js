
  function fetchBooks() {
    return fetch("https://anapioficeandfire.com/api/books")
   .then(results => results.json())
   .then( results => renderBooks(results))
  }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}



