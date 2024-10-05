const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const cors = require('cors');
const passport = require('passport');
const bcrypt = require('bcrypt');

const db = require('./db');

const app = express();
const PORT = 2000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));

require('./passport');

app.use(session({
  secret: "string",
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
  const idQuery = await db.query(`SELECT COUNT(DISTINCT id) FROM "accounts" `);
  const id = Number(idQuery.rows[0].count) + 1;

  try {

    const userObj = await db.query(`(SELECT COUNT (DISTINCT username) FROM "accounts" WHERE username = '${username}')`);
    const userCount = userObj.rows[0].count;

    if (userCount != 0) {
      console.log("User already exists!");
      return res.json({success: false, message: "User already exists!"});
    }

    if (password != verifyPassword) {
      console.log("Password does not match!");
      return res.json({success: false, message: "Password does not match!"});
    }
    

    // Hash password
    const salt = await bcrypt.genSalt(10);
    bcrypt.hash(password, salt, function(err, hash) {
      db.query(`INSERT INTO "accounts" (id, username, password) VALUES ('${id}', '${username}', '${hash}')`);
    });

    res.redirect("./sign-in");

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post ("/login", passport.authenticate('local', {
  successRedirect: "./home",
  failureRedirect: "./sign-in"
}))


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})