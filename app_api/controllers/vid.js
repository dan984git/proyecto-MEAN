// USAR MONGOOSE y el modelo compilado para acceder a la base de datos
const mongoose = require('mongoose');
const Video = mongoose.model('video');

// CONTROLADORES

const videoList = (req, res) =>  { 
    Video
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoVideo)=>{ 
            if(!objetoVideo){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${video}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Video no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${video}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoVideo);
        });
};

module.exports = {
    videoList
};

