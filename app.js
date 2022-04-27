//alle requirements som brukes i app.js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const {checkNotAuthenticated, checkAuthenticated} = require('./middleware/auth.js')
const passportConfig = require('./config/passport.js');
const app = express();
const path = require('path');

passportConfig(passport);

app.set('view engine', 'ejs');

//gjør content til default path
app.use(express.static(path.join(__dirname, 'content')));
app.use(express.urlencoded({ extended: true }));

//secret brukes for å komme seg inn i riktig session
app.use(session({
	secret: '9d2d922d',
	resave: true,
	saveUninitialized: true
}));

//initializer passport og bruker session for å lagre om personen er logget inn
app.use(passport.initialize());
app.use(passport.session());

//redirecter til login hvis du ikke er authentisert og root hvis du er det
app.post('/login', checkNotAuthenticated, (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login'
	})(req, res, next)
})

//renderer index.ejs på root 
app.get('/', checkAuthenticated, (req, res) => {
	res.render('index')
})

//rederer login.ejs
app.get('/login', checkNotAuthenticated, (req, res) => {
	res.render('login')
})

//redirecter til root
app.post('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.listen(3000)