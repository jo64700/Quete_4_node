require('dotenv').config(); // Charger les variables d'environnement depuis le fichier .env

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

const message = `I am ${name}, wilder in ${city}, and I love ${language}`;
console.log(message);