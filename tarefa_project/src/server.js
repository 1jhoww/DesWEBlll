const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const rota_tarefas = require('./controller/tarefasController');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/rota_tarefas', rota_tarefas);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log("Servidor Rodando na porta " + PORT);
});
