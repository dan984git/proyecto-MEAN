const mongoose = require('mongoose');

const OpcionesSchema =  new mongoose.Schema({ // Definicion del esquema
    imagen: {
        type: String,
        required: true
    },
    opcion: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    vigencia: {
        type: String,
        required: true
    } 
});

const Opciones = new mongoose.model('opc', OpcionesSchema);
/*const opci = new Opciones({
    imagen: '01-large.jpg',
    opcion: 'Opción 1',
    descripcion: 'Lorem ipsum is simple dummy text on the printing and typesetting industry Lorem ipsum is simple dummy text on the printing and typesetting industry Lorem ipsum is simple dummy text on the printing and typesetting industry',
    vigencia: 'Vigente hasta 20 Diciembre'  
});

opci.save();*/