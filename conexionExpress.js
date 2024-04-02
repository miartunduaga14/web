const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// URL de conexión a la base de datos MongoDB
const dbUrl = 'mongodb://localhost:27017/myDatabase';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
