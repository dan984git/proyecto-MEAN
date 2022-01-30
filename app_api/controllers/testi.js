const mongoose = require('mongoose');
const Testimoniales = mongoose.model('testi');

// CONTROLADORES

const testimonialesList = (req, res) =>  { 
    Testimoniales
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoTestimoniales)=>{ 
            if(!objetoTestimoniales){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${testi}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Testimoniales no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${testi}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoTestimoniales);
        });
};

module.exports = {
    testimonialesList
};