const mongoose = require('mongoose');
const Opciones = mongoose.model('opc');

// CONTROLADORES

const opcionesList = (req, res) =>  { 
    Opciones
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoOpciones)=>{ 
            if(!objetoOpciones){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${opc}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Opciones no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${opc}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoOpciones);
        });
};

module.exports = {
    opcionesList
};