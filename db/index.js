const mysql = require('mysql');

let connection;

if (process.env.NODE_ENV === 'production') {
  connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookstore_db',
  });

  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);
  });
}

module.exports = connection;
