const mongoose = require('mongoose');
const Videoproductos = mongoose.model('vidprod');

// CONTROLADORES

const vidpList = (req, res) =>  { 
    Videoproductos
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoVideoproductos)=>{ 
            if(!objetoVideoproductos){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${vidprod}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Video productos no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${vidprod}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoVideoproductos);
        });
};
const vidpRead = (req, res) => {
    Videoproductos
        .findById(req.params.videoproductosid)
        .exec((err, objetoVideoproductos) => {
            if (!objetoVideoproductos) { //no existe el documento con prodid
                console.log(`Video productos no encontrado con id: ${req.params.videoproductosid}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Video producto no encontrado"
                    });
            } else if (err) { //findbyid encontro un error
                console.log(`Se encontro un error en el video productos con id: ${req.params.videoproductosid}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontro el producto con id: ${req.params.prodid}`);
            res
                .status(200)
                .json(objetoVideoproductos);
        });
};

module.exports = {
    vidpList,
    vidpRead
};