const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.post('/users/add', (req, res) => {
  console.log('User added:', req.body);
  res.send('User added successfully!');
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'Omar', age: 26 },
    { name: 'Ammar', age: 23 },
    { name: 'Abdo', age: 21 }
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});