const mongoose = require('mongoose');
const readline = require('readline');
require('./productos');
require('./pdf_bazar');
require('./videoHomepage');
require('./calendario');
require('./recetas');
require('./demostraciones');
require('./video-productos');
require('./carousel');
require('./directoras');
require('./testimoniales');
require('./inscribete');
require('./opciones');
require('./security');
//require('./productos_bazar');

//const dbURI = 'mongodb://localhost/twBD';
let dbURI = 'mongodb://localhost/twBD'; //mongodb://localhost/twBD

if (process.env.NODE_ENV === 'production') {  
    dbURI = process.env.MONGODB_URI;
}

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });//GIT change

// BASE DE DATOS - CONEXION NOMBRADA
/*const dbURIlog = 'mongodb://localhost/twBDlog';
const logDB = mongoose.createConnection(dbURIlog);*/

// USO DE READLINE
if (process.platform === 'win32') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    });
}

// FUNCION PARA CERRAR CONEXION A LA BASE DE DATOS
const procShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose desconectado debido a ${msg}`);
        callback();
    });
};

// LLAMADAS A procShutdown DEPENDIENDO DE LOS EVENTOS ESCUCHADOS
// - windows: SIGINT
process.on('SIGINT', () => {
    procShutdown('terminacion de la app por windows', () => {
        process.exit(0);
    });
});

// - node: SIGUSR2
process.once('SIGUSR2',  () => {
    procShutdown('reinicio de nodemon', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// - heroku: SIGTERM
process.on('SIGTERM',  () => {
    procShutdown('terminacion de la app por heroku', () => {
        process.exit(0);
    });
});

// MONITOREO DE LA BASE DE DATOS 1
//Conexion exitosa
mongoose.connection.on('connected', () =>{
    console.log(`Mongoose se conecto a ${dbURI}`);
});

//Error en conexion
mongoose.connection.on('error', err =>{
    console.log('Mongoose error de conexion: ', err);
});

//Desconexion
mongoose.connection.on('disconnected', () =>{
    console.log('Mongoose desconectado');
});

// MONITOREO DE EVENTOS A BASE DE DATOS 2
// DB Conectada
/*logDB.on('connected', () => {
    console.log(`Mongoose se conecto a ${dbURIlog}`);
});

// Error de conexion
logDB.on('error', () => {
    console.log('Mongoose error de conexion: ', err);
});

// Desconexion
logDB.on('disconnected', () => {
    console.log('Mongoose desconectado');
});*/



