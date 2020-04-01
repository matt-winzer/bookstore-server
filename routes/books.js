const express = require('express');
const router = express.Router();

const db = require('../db')

const allBooks = require('../mocks/books-mock.js');

// GET all books route
router.get('/', (req, res, next) => {
  // Real DB: reach out to database
  // On response: send success w/data to front-end
  // On failure: send failure w/status code & message to front-end
  res.json({
    books: allBooks
  });
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);

  const book = allBooks.filter(book => book.id === id);
  // TODO: account for no book being found (different response, status code, etc.)

  res.json({
    book: book[0]
  });
});

module.exports = router;