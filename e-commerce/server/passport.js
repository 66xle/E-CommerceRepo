const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("./db");

passport.use(new LocalStrategy(
    async function verify(username, password, done) {

        const userObj = await db.query(`(SELECT * FROM "accounts" WHERE username = '${username}')`);

        const userCount = userObj.rowCount;

        if (userCount == 0) return done(null, false, { success: false, message: 'Incorrect username.'});

        const user = {
          id: userObj.rows[0].id,
          password: userObj.rows[0].password
        }

        console.log("Found user");

        const matchedPassword = await bcrypt.compare(password, user.password);

        console.log(matchedPassword);

        if (!matchedPassword) return done(null, false, { success: false, message: 'Incorrect password.' });
        
        console.log("Password match");

        return done(null, user);
    }
  ))


  // passport.serializeUser((err, user, done) => {
  //   console.log("serialize");
  //   if (err) return done(err);

  //   console.log("check");

  //   return done(null, user.id);
  // });

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  // passport.deserializeUser((id, done) => {
  //   console.log("deserialize");
  //   db.users.findById(id, function(err, user) {
  //       if (err) return done(err);
    
  //       return done(null, user);
  //     })
  // })

  passport.deserializeUser(function(user, done) {
    console.log("deserialize")
      return done(null, user);
  });