const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path=require('path');
const { set } = require('./config/mailer');
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

require('./controllers/auth')(app);
require('./controllers/profile')(app);
require('./controllers/passReset')(app);
require('./controllers/contactUs')(app);
require('./controllers/text2Login')(app);
require('./controllers/mentor')(app);
require('./controllers/xp')(app);
require('./controllers/help2FindMentor')(app);
require('./controllers/cont')(app);
require('./controllers/depoiment')(app);
require('./controllers/blog')(app);
require('./controllers/consultPage')(app);
require('./controllers/chat')(app,io);

server.listen(process.env.PORT || 3333);
console.log("Servidor iniciado com sucesso!!!");


