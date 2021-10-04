const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path=require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
;

require('./controllers/auth')(app);

server.listen(process.env.PORT || 3333);
console.log("Servidor iniciado com sucesso!!!");


