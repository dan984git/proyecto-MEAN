// USAR MONGOOSE y el modelo compilado para acceder a la base de datos
const mongoose = require('mongoose');
const Producto = mongoose.model('prod');

// CONTROLADORES
//Crear un nuevo documento
const prodCreate = (req, res) => {
    Producto.create({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        capacidad: req.body.capacidad,
        medida: req.body.medida,
        precioNormal: req.body.precioNormal,
        precioDescuento: req.body.precioDescuento,
        semana: req.body.semana,
        imagen: req.body.imagen,
        stock: req.body.stock
    }, (err, objetoProducto) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json({ objetoProducto });
        }
    });

};

//Leer todos los documentos
const prodList = (req, res) => {
    Producto
        .find() //obtiene todos los documentos de la coleccion
        .exec((err, objetoProducto) => {
            if (!objetoProducto) { //no existe el documento en la coleccion
                console.log(`No existen documentos en la coleccion : ${prods}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Producto no encontrado"
                    });
            } else if (err) { //findbyid encontro un error
                console.log(`Se encontro un error en la coleccion: ${prods}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontraron documentos en la coleccion: ${prods}`);
            res
                .status(200)
                .json(objetoProducto);
        });
};

//Leer el producto especificado
const prodRead = (req, res) => {
    Producto
        .findById(req.params.prodid)
        .exec((err, objetoProducto) => {
            if (!objetoProducto) { //no existe el documento con prodid
                console.log(`Producto no encontrado con id: ${req.params.prodid}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Producto no encontrado"
                    });
            } else if (err) { //findbyid encontro un error
                console.log(`Se encontro un error en el producto con id: ${req.params.prodid}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontro el producto con id: ${req.params.prodid}`);
            res
                .status(200)
                .json(objetoProducto);
        });
};

// MODIFICACION DE UN DOCUMENTO
const prodUpdate = (req, res) => {
    if (!req.params.prodid) {
        return res
            .status(404)
            .json({ "Mensaje": "Producto no encontrado, ingrese un prodid valido" })
    }
    Producto
        .findById(req.params.prodid)
        .exec((err, objetoProducto) => {
            if (!objetoProducto) {
                return res
                    .status(404)
                    .json({ "Mensaje": "ProdId no encontrado" })
            } else if (err) {
                return res
                    .status(400)
                    .json(err)
            }
            // Modifico solo el path nombre
            objetoProducto.capacidad = req.body.capacidad;
            objetoProducto.codigo = req.body.codigo;
            objetoProducto.imagen = req.body.imagen;
            objetoProducto.medida = req.body.medida;
            objetoProducto.precioDescuento = req.body.precioDescuento;
            objetoProducto.precioNormal = req.body.precioNormal;
            objetoProducto.semana = req.body.semana;
            objetoProducto.stock = req.body.stock;
            objetoProducto.nombre = req.body.nombre;
            objetoProducto.save((err, Prods) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(Prods);
                }
            });
        });
};

//Eliminar un documento
const prodDelete = (req, res) => {
    if(req.params.prodid){
        Producto  
            .findByIdAndDelete(req.params.prodid)
            .exec((err, objetoProducto)=>{
                if(err){
                    return res
                        .status(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null);
            });
    } else {
        res
            .status(404)
            .json({ "Mensaje" : "No existe el productoID" });
    }
    
};

//Busqueda por nombre y codigo
const nomcodRead = (req, res) => {
    const buscar = new RegExp(req.params.name);
    Producto
        .find({
            'nombre': buscar,
        })
        .exec((err, NomcodObj) => {
            if (!NomcodObj) { //no existe el documento con prodid
                console.log(`Producto no encontrado con nombre o código: ${req.params.name}`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Producto no encontrado"
                    });
            } else if (err) { //findbyid encontro un error
                console.log(`Se encontro un error en el producto con nombre o código: ${req.params.name}`);
                return res
                    .status(404)
                    .json(err)
            }
            //console.log(`Se encontro el producto con id: ${req.params.prodid}`);
            res
                .status(200)
                .json(NomcodObj);
                console.log(buscar)
        });
};

module.exports = {
    prodCreate,
    prodList,
    prodRead,
    prodUpdate,
    prodDelete,
    nomcodRead
};

