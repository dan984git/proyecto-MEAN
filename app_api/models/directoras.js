const mongoose = require('mongoose');

const directorasSchema =  new mongoose.Schema({ // Definicion del esquema
    img: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    unidad: {
        type: String,
        required: true
    },
    frase: {
        type: String,
        required: true
    }    
});

const directoras = new mongoose.model('direc', directorasSchema);
/*const direc = new directoras({
    img: 't1.jpg',
    nombre: 'Irina Pozo',
    unidad: 'Central',
    frase: 'Cuentas con la mejor directora'
});

direc.save();*/