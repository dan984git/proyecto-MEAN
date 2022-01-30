// USAR MONGOOSE y el modelo compilado para acceder a la base de datos
const mongoose = require('mongoose');
const Bazar = mongoose.model('bzr');

const bazarList = (req, res) =>  { 
    Bazar
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoBazar)=>{ 
            if(!objetoBazar){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${bzr}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Bazar no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${bzr}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoBazar);
        });
};
module.exports = {
    bazarList
};

