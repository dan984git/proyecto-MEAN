const mongoose = require('mongoose');

const pdfBazarSchema =  new mongoose.Schema({ // Definicion del esquema
    imagenes: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
});

const pdfBazar = new mongoose.model('bzr', pdfBazarSchema);
/*const bzr = new pdfBazar({
    imagenes: 'bazar1.jpg',
    alt: 'tupperware bazar'
});

bzr.save();*/