const mongoose = require('mongoose');
const Carousel = mongoose.model('carouseldb');

// CONTROLADORES

const carouselList = (req, res) =>  { 
    Carousel
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoCarousel)=>{ 
            if(!objetoCarousel){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${carousel}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Carousel no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${carousel}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoCarousel);
        });
};

module.exports = {
    carouselList
};