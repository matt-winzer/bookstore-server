const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Router imports
const booksRoutes = require('./routes/books');

app.get('/', (req, res, next) => {
  res.json({
    message: 'Hey your server works!'
  });
});

app.use('/api/books', booksRoutes);


app.listen(PORT, console.log(`server listening on port: ${PORT}`));