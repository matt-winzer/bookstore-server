const express = require('express');
const router = express.Router();

const controller = require('../controllers/books');
const allBooks = require('../mocks/books-mock.js');

router.get('/', controller.getBooksWithAuthors);
router.get('/cart/:userId', controller.getCartBooks);
router.post('/cart/:userId', controller.addBookToCart);

// Route below no longer being used
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const book = allBooks.filter((book) => book.id === id);
  // TODO: account for no book being found (different response, status code, etc.)

  res.json({
    book: book[0],
  });
});

module.exports = router;
