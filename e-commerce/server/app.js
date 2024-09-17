const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');

const db = require('./db');
const { hash } = require('bcrypt');

const app = express();
const PORT = 2000;

app.use(cors());
app.use(express.json());

require('./passport');

app.use(session({
  secret: "string",
  cookie: {maxAge: 10},
  saveUninitialized: false,
  resave: false,
  sameSite: 'none',
  secure: true
}))


app.use(passport.initialize());
app.use(passport.session());



app.get('/game', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM "products" ORDER BY id');
      res.send(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
});


app.post('/register', async (req, res) => {
  const { username, password, verifyPassword } = req.body;
  const id = await db.query(`SELECT COUNT(DISTINCT id) FROM "accounts" `) + 1;
  try {
    const user = await db.query(`(SELECT COUNT (DISTINCT username) FROM "accounts" WHERE username = '${username}')`);
    return res.json(id);
    if (user) {
      console.log("User already exists!");
      return res.json({success: false, message: "User already exists!"});
    }

    if (password != verifyPassword) {
      console.log("Password does not match!");
      return res.json({success: false, message: "Password does not match!"});
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    db.post(`INSERT INTO "accounts" (id, username, password VALUES ('${id}', '${username}', '${hashedPassword}')`);
    res.redirect('sign-in');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})