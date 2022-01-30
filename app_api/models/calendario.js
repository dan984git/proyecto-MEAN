const mongoose = require('mongoose');

const calendarioSchema =  new mongoose.Schema({ // Definicion del esquema
    dia: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    link:{
        type: String
    },
    mes: {
        type: String,
        required: true
    }    
});

const calendario = new mongoose.model('cal', calendarioSchema);
/*const calen = new calendario({
    dia: 'Jueves 10',
    titulo: 'Conexión Semana 48',
    descripcion: 'Se presentará la revista de la semana 48, la presentadora será Irina Pozo junto con Darwin Burbano. No te lo puedes perder, te esperamos el día jueves 10 en zoom.com',
    mes: 'Diciembre 2020'    
});*/

//calen.save();