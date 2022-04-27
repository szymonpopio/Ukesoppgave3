
// sjekker om personen er logget inn og sender de til login siden hvis de ikke er det
function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	}
	res.redirect('/login')
}

// sjekker om personen er logget ut og sender de til root hvis de er det
function checkNotAuthenticated(req, res, next) {
	if (!req.isAuthenticated()) {
		return next()
	}
	res.redirect('/')
}

//eksporterer de 2 funksjonene så de kan brukes andre steder
module.exports = { checkAuthenticated, checkNotAuthenticated }