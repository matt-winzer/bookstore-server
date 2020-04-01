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

module.exports = {
  getBooksWithAuthors,
};
