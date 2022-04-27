//setter local strategy til passport-local så den vet hvilken strategy den skal bruke
const LocalStrategy		= require('passport-local').Strategy;

//admin user som kan logges inn, pga ingen register
const user = {
    username: 'admin',
    password: 'password',
    id: 1
};

//authentication som sjekker om brukernavn og passord er riktig
module.exports = (passport) => {
    passport.use(new LocalStrategy({}, async (username, password, done) => {
        //sjekker brukernavn
        if(username !== user.username) {
            return done(null, false);
        }

        //sjekker passord
        if(password !== user.password) {
            return done(null, false);
        } else {
            done(null, user);
        }
    }));

    //lar nettsiden lagre at en person er logget inn
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    //lar nettsiden logge ut en person
    passport.deserializeUser((id, done) => {
        done(null, user);
    });
};