const mongoose = require('mongoose');

const testimonialesSchema =  new mongoose.Schema({ // Definicion del esquema
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
    video: {
        type: String,
        required: true
    }    
});

const testimoniales = new mongoose.model('testi', testimonialesSchema);
/*const testimo = new testimoniales({
    img: 't1.jpg',
    nombre: 'Irina Pozo',
    unidad: 'Central',
    video: 'Video1.mp4'
});

testimo.save();*/