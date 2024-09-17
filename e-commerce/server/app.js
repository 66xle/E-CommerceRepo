const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();
const PORT = 2000;

app.use(cors());



app.get('/game', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM "products" ORDER BY id');
      res.send(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
});



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})