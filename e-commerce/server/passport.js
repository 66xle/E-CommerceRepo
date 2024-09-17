const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");


passport.use(new LocalStrategy(
    function verify(username, password, done) {
        db.get('', [username], function(err, user) {
            if (err) return done(err);

            if (!user) return done(null, false);

            const matchedPassword = bcrypt.compare(password, user.password);

            if (user.password != matchedPassword) return done(null, false);

            return done(null, user);
        })
    }
  ))