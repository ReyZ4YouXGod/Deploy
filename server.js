const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Port aplikasi kamu

// Middleware untuk membaca file statis seperti CSS/Gambar di folder root
app.use(express.static(path.join(__dirname, '/')));

// Menampilkan index.html saat domain diakses
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Website xyzid.store jalan di port ${port}`);
});
