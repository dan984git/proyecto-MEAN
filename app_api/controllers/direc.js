const mongoose = require('mongoose');
const Directoras = mongoose.model('direc');

// CONTROLADORES

const directorasList = (req, res) =>  { 
    Directoras
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoDirectoras)=>{ 
            if(!objetoDirectoras){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${direc}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Directoras no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${direc}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoDirectoras);
        });
};

module.exports = {
    directorasList
};