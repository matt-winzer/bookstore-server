const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware configuration
app.use(morgan('dev'));
app.use(cors());

// Router imports
const booksRoutes = require('./routes/books');

// Test route
app.get('/', (req, res, next) => {
  res.json({
    message: 'Hey your server works!'
  });
});

// Routes
app.use('/api/books', booksRoutes);


app.listen(PORT, console.log(`server listening on port: ${PORT}`));