const model = require('../models/books');

const getBooksWithAuthors = (req, res) => {
  model
    .readBooksWithAuthors()
    .then((books) => {
      res.json({
        success: true,
        books,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({
        success: false,
        message: 'Could not retrieve books',
      });
    });
};

const addBookToCart = (req, res) => {
  const {
    bookId,
    userId,
  } = req.body;

  model.addBookToCart(bookId, userId)
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({
        success: false,
        message: 'Could not add book to cart',
      });
    });
};

module.exports = {
  getBooksWithAuthors,
  addBookToCart,
};
