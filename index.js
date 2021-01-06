require('dotenv').config();
const path = require('path');

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base de datos
dbConnection();


// Rutas

app.get('/', function(req, res) {
    res.send('Hello World')
});
app.use('/api/login', require('./routes/auth'));
app.use('/api/upload', require('./routes/uploads'));
app.use('/api/usuarios', require('./routes/usuarios'));


app.listen(process.env.PORT, () => {
    console.log('Running Serve port ' + process.env.PORT);
});