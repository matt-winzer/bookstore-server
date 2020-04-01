const db = require('../db');

const readBooksWithAuthors = () => {
  const query = `SELECT b.*, a.name AS author_name
  FROM book as b
  INNER JOIN book_author as ba ON b.id = ba.book_id
  INNER JOIN author as a ON ba.author_id = a.id`;

  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve((reformatBooksWithAuthors(results)));
    });
  });
};

// ---------- UTILITY FUNCTIONS ----------

function reformatBooksWithAuthors(books) {
  const reformatted = {};

  books.forEach((book) => {
    const authorName = book.author_name;
    if (reformatted[book.id]) {
      reformatted[book.id].authors.push({ name: authorName });
    } else {
      reformatted[book.id] = book;
      delete reformatted[book.id].author_name;
      reformatted[book.id].authors = [{ name: authorName }];
    }
  });

  return Object.keys(reformatted).map((bookId) => reformatted[bookId]);
}

module.exports = {
  readBooksWithAuthors,
};
