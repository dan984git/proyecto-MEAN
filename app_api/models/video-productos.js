const mongoose = require('mongoose');

const VideoproductosSchema =  new mongoose.Schema({ // Definicion del esquema
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

const Videoproductos = new mongoose.model('vidprod', VideoproductosSchema);
/*const vidp = new Videoproductos({
    imagen: '01-large.jpg',
    nombre: 'Fresquita',
    video: 'test.mp4',
    descripcion: 'Una rica sopa de Fanesca con la cual podrás compartir con tus familiares y amigos más cercanos'  
});

vidp.save();*/