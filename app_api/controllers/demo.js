const mongoose = require('mongoose');
const Demostraciones = mongoose.model('dem');

// CONTROLADORES

const demList = (req, res) =>  { 
    Demostraciones
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoDemostraciones)=>{ 
            if(!objetoDemostraciones){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${dem}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Demostraciones no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${dem}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoDemostraciones);
        });
};
const demRead = (req, res) => {
    Demostraciones
        .findById(req.params.demostracionesid)
        .exec((err, objetoDemostraciones) => {
            if (!objetoDemostraciones) { //no existe el documento con prodid
                console.log(`Demostracion no encontrado con id: ${req.params.demostracionesid}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Demostracion no encontrado"
                    });
            } else if (err) { //findbyid encontro un error
                console.log(`Se encontro un error en la demostracion con id: ${req.params.demostracionid}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontro el producto con id: ${req.params.prodid}`);
            res
                .status(200)
                .json(objetoDemostraciones);
        });
};

module.exports = {
    demList,
    demRead
};