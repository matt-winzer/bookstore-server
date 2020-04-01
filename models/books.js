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

const readCartBooks = (userId) => {
  const query = `SELECT b.* FROM book as b
  INNER JOIN user_book as ub ON b.id = ub.book_id
  INNER JOIN user as u ON ub.user_id = u.id
  WHERE u.id = ${userId}`;

  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve((results));
    });
  });
};

const addBookToCart = (bookId, userId) => {
  const query = `INSERT INTO user_book (book_id, user_id)
  VALUES (${bookId}, ${userId})`;

  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
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
  addBookToCart,
  readCartBooks,
};
