const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("./db");

passport.use(new LocalStrategy(
    async function verify(username, password, done) {

        const userObj = await db.query(`(SELECT * FROM "accounts" WHERE username = '${username}')`);
        const userCount = userObj.rows[0].count;
        const user = {
            id: userObj.rows[0].id,
            password: userObj.rows[0].password
        }

        if (userCount == 0) return done(null, false, { success: false, message: 'Incorrect username.'});

        console.log("Found user");

        const matchedPassword = await bcrypt.compare(password, user.password);

        console.log(matchedPassword);

        if (!matchedPassword) return done(null, false, { success: false, message: 'Incorrect password.' });
        
        console.log("Password match");

        return done(null, user, { success: true, message: 'Successful login.' });
    }
  ))


  passport.serializeUser((err, user, done) => {
    if (err) return done(err);

    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    db.users.findById(id, function(err, user) {
        if (err) return done(err);
    
        return done(null, user);
      })
  })