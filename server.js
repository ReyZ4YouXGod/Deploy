const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Mengatur folder publik untuk file statis (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Website berjalan di http://localhost:${port}`);
});
