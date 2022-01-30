const mongoose = require('mongoose');

const productoSchema =  new mongoose.Schema({ // Definicion del esquema
    nombre: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        unique: true,
        required: true
    },
    precioNormal: {
        type: Number,
        required: true
    },
    precioDescuento: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        'default': 'imagen.png'
    },
    capacidad: {
        type: Number,
        'default': 0
    },
    medida: {
        type: String,
        enum: ['mL', 'L', '']
    },
    semana: {
        type: Number,
        'default': 1,
        min: 1,
        max: 52,
        required: true
    },
    stock: {
        type: String,
        enum: ['Hay stock', 'No hay stock']
    }
    
});

const Producto = new mongoose.model('prod', productoSchema); // Compila es esquema en un modelo
/*const prod = new Producto({
    nombre: 'Cristaleware Grande #3',
    codigo: 'E-140',
    precioNormal: '41.21',
    precioDescuento: '23.50',
    descuento: '30', //porciento %
    capacidad: '',
    medida: '',
    semana: '',
    stock: 'Hay stock',
    

}); // Crear el documento

prod.save(); // Guardar en la base de datos*/