const mongoose = require('mongoose');

const carouselSchema =  new mongoose.Schema({ // Definicion del esquema
    imgs: {
        type: String,
        required: true
    }    
});

const carousel = new mongoose.model('carouseldb', carouselSchema);
/*const carouseldb = new carousel({
    imgs: 'test.jpg'    
});

carouseldb.save();*/