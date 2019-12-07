const express = require('express');
const ConnectDB = require('./config/db');
const app = express();

// Connect DB
ConnectDB();
app.get('/', (req, res) => {
  res.send('Hello Amit!');
});

app.get('/api/auth', require('./routes/auth'));
app.get('/api/users', require('./routes/users'));
app.get('/api/contact', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
