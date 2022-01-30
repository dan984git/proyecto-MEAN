const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Security = mongoose.model('Security');

passport.use(new LocalStrategy({
    usernameField: 'user'
},
    (username, password, done) => {
        Security.findOne({ user: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    message: 'Nombre de Usuario Incorrecto.'
                });

            };
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Password Incorrecto'
                });
            }
            return done(null, user);
        });
    }
));