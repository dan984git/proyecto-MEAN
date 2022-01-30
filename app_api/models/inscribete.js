const mongoose = require('mongoose');

const inscribeteSchema =  new mongoose.Schema({ // Definicion del esquema
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    opcioningreso: {
        type: String,
        required: true
    },  
    fecha:{
        type: Date,
        'default': Date.now 
    }  
});

const Inscribete = new mongoose.model('ins', inscribeteSchema); // Compila es esquema en un modelo
/*const inscri = new Inscribete({
    nombre: 'Daniel',
    apellido: 'Burbano',
    correo: 'daniel.984@hotmail.com',
    telefono: '0999868006',
    cedula: '1724589963', //porciento %
    ciudad: 'Quito',
    opcioningreso: 'Opción 1'    

}); 
// Crear el documento
inscri.save();*/