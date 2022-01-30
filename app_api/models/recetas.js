const mongoose = require('mongoose');

const RecetasSchema =  new mongoose.Schema({ // Definicion del esquema
    imagen: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    } 
});

const Receta = new mongoose.model('rec', RecetasSchema);
/*const rece = new Receta({
    imagen: '01-large.jpg',
    nombre: 'Fanesca',
    video: 'test.mp4',
    descripcion: 'Una rica sopa de Fanesca con la cual podrás compartir con tus familiares y amigos más cercanos'  
});

rece.save();*/