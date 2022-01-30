const mongoose = require('mongoose');
const Recetas = mongoose.model('rec');

// CONTROLADORES

const recList = (req, res) =>  { 
    Recetas
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoRecetas)=>{ 
            if(!objetoRecetas){ //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${rec}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Recetas no encontrado"
                    });
            } else if(err){ //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${rec}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoRecetas);
        });
};
const recRead = (req, res) => {
    Recetas
        .findById(req.params.recetaid)
        .exec((err, objetoRecetas) => {
            if (!objetoRecetas) { //no existe el documento con prodid
                console.log(`Receta no encontrado con id: ${req.params.recetaid}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Receta no encontrado"
                    });
            } else if (err) { //findbyid encontro un error
                console.log(`Se encontro un error en la receta con id: ${req.params.recetaid}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontro el producto con id: ${req.params.prodid}`);
            res
                .status(200)
                .json(objetoRecetas);
        });
};

module.exports = {
    recList,
    recRead
};