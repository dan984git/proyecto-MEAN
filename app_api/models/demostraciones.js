const mongoose = require('mongoose');

const DemostracionesSchema =  new mongoose.Schema({ // Definicion del esquema
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

const Demostraciones = new mongoose.model('dem', DemostracionesSchema);
/*const demo = new Demostraciones({
    imagen: '01-large.jpg',
    nombre: 'Sellos y tapas',
    video: 'test.mp4',
    descripcion: 'Una rica sopa de Fanesca con la cual podrás compartir con tus familiares y amigos más cercanos'  
});

demo.save();*/