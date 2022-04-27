# Tverrfaglig Ukesoppgave
### Oversikt
* [Dokumentasjon](#dokumentasjon)
* [Dependencies](#dependencies)
* [Produksjonsløsning](#produksjonsløsning)
* [Utviklingsløsning](#utviklingsløsning)
* [Prosjektmetodikk](#prosjektmetodikk)

## Dokumentasjon
### Installasjon
For å laste ned prosjektet kan vi bruke git clone og så gå inn i mappen å laste ned alle dependencies.
```
git clone https://github.com/szymonpopio/Ukesoppgave3.git
cd Ukesoppgave3
npm install
(npm audit fix) hvis det trengs
nodemon app.js (hoster nettsiden på localhost:3000)
```

## Dependencies
Liste over dependencies

* ejs
* express
* express-session
* passport
* passport-local

## Produksjonsløsning
### Ubuntuserver på VM
Jeg valgte å kjøre nettsiden på en VM ettersom jeg hadde mange problemer med Heroku, jeg endret IP-adressen til 69 (adressen vi fikk utdelt) og prøvde å clone prosjektet og hoste det gjennom nginx men dette funket ikke så jeg prøvde å gjøre det gjennom windows server men jeg fikk også mange problemer med det så dette finket heller ikke så nettsiden er ikke hostet noe sted.
	
## Utviklingsløsning
Jeg valgte å bruke node.js ettersom jeg prøvde på MVC mappestruktur men det varierte litt på hva det stod om det for eksempel public/content varierte mye. Jeg følte jeg hadde alt for lite tid til å bygge mye på oppgaven så jeg fikk ikke tid til å lage en database og register.

## Prosjektmetodikk
Prosjektmetodikk er viktig får å holde oversikt over hva man har igjen å gjøre og gjør det enkelt å finne ut av hvor man skal starte med oppgaven. Det gjør det også motiverende å se hvor mye man har klart å gjøre over tid og det gjør det enklere å fortsette å jobbe. Prosjektmetodikk er best brukt i gruppeprosjekter hvor man kan koordinere hva folk gjør og hvis man blir ferdig med noe kan man se hvor andre folk ligger ann, og hvis det er noen som har jobbet med det samme i veldig lang tid så kan man enkelt se det å få flere folk til å jobbe med det for å bli ferdig.
