const books = [
    { title: "Libro 1", authorName: "Osvaldo", releaseYear: 2027 },
    { title: "Libro 2", authorName: "Memo", releaseYear: 2024 },
    { title: "Libro 3", authorName: "Guillermo", releaseYear: 2024 },
    { title: "Libro 4", authorName: "Yorch", releaseYear: 2028 },
    { title: "Libro 5", authorName: "Anuar", releaseYear: 2030 },
  ];
  
  function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
      return -1;
    } else if (book1.releaseYear > book2.releaseYear) {
      return 1;
    }
    return 0;
  };
  
  // console.log(sortByYear(books[3], books[1]));
  
  let filteredBooks = [];
  
  function filterAndSort(books) {
    filteredBooks = books.filter(book => book.releaseYear > 2025);
    filteredBooks.sort(sortByYear); 
  }
  
  filterAndSort(books);
  
  console.log(filteredBooks); 