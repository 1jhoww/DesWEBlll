const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8081;

const proprietarioController = require('./controllers/ProprietarioController');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Estou aqui'));
app.use('/proprietario', proprietarioController);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));