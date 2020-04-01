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
  const { bookId } = req.body;
  const { userId } = req.params;

  model.addBookToCart(bookId, userId)
    .then((data) => {
      res.status(201).json({
        success: true,
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

const getCartBooks = (req, res) => {
  const { userId } = req.params;

  model.readCartBooks(userId)
    .then((books) => {
      res.json({
        books,
      });
    })
    .catch((err) =>{
      console.error(err);
      res.status(400).json({
        success: false,
        message: 'Could not retrieve cart books',
      });
    });
};

module.exports = {
  getBooksWithAuthors,
  addBookToCart,
  getCartBooks,
};
