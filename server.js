/*const port = process.env.SERVER_PORT;
server.listen(port);
*/

require('dotenv').config(); // Charger les variables d'environnement depuis le fichier .env

const express = require('express');
const app = express();

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

app.get('/', (req, res) => {
  const message = `I am ${name}, wilder in ${city}, and I love ${language}`;
  res.send(message);
});

app.listen(3000, () => {
  console.log('L\'application est en cours d\'exécution sur le port 3000 !');
});

console.log(process.env.MESSAGE)